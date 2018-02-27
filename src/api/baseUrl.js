export default function getBaseUrl() {
  return getQueryStringParameterByName('usemockapi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name) {
    var pageUrl = decodeURIComponent(window.location.search.substring(1));
    var urlVariables = pageUrl.split('&');
    
    for (let i = 0; i < urlVariables.length; i++) {
        let parameterName = urlVariables[i].split('=');

        if (parameterName[0] === name) {
            return parameterName[1] === undefined ? true : parameterName[1];
        }
    }
}