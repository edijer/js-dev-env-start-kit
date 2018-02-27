import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
import Raven from 'raven-js';

const baseUrl = getBaseUrl();

export function getUsers() {
  try {
    return get('users');  
  } catch (error) {
    Raven.captureException(error);
  }
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}