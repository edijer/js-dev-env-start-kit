/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', function() {
  // just ignore the passed faker instance
  var faker = require('faker');
  // do other stuff
  return faker;
});

jsf.resolve(schema).then((result) => {
  const json = JSON.stringify(result);

  fs.writeFile("./src/api/db.json", json, (err) => {
    if (err) {
      return console.log(chalk.red(err));
    } else {
      console.log(chalk.green("Mock data generated."));
    }
  });
});


