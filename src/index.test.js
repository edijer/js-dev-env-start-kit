import {expect} from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

describe('This is a smoke test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('Should say Hello', () => {
    const indexHtml = fs.readFileSync('./src/index.html', 'utf-8');
    const { window } = new JSDOM(indexHtml);
    const document = window.document;
    const h1 = document.querySelector('h1');
    expect(h1.innerHTML).to.equal('Users');
    window.close();
  });
});