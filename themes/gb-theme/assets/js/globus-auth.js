var YOUR_CLIENT_ID = '7d7c343d-2a58-4a11-b351-f8bdc45fa522';
var YOUR_REDIRECT_URI = 'https://datasci.brown.edu/services/infrastructure/oscar/';
var YOUR_REDIRECT_URI_ENCODED = 'https%3A%2F%2Fdatasci.brown.edu%2Fservices%2Finfrastructure%2Foscar%2F';
var CODE = window.location.search.toString().split('=')[1];
var fragmentString = location.hash.substring(1);

// Parse query string to see if page request is coming from OAuth 2.0 server.
var params = {};
var regex = /([^&=]+)=([^&]*)/g, m;
while (m = regex.exec(fragmentString)) {
  params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}


/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
function oauth2SignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://auth.globus.org/v2/oauth2/authorize';

  // Create element to open OAuth 2.0 endpoint in new window.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': YOUR_CLIENT_ID,
                'redirect_uri': YOUR_REDIRECT_URI,
                'scope': 'urn:globus:auth:scope:auth.globus.org:view_identities',
                'response_type': 'code'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

function accessToken() {
  var accessTokenEndpoint = 'https://auth.globus.org/v2/oauth2/token'
  var params = `redirect_uri=${YOUR_REDIRECT_URI_ENCODED}&grant_type=authorization_code&code=${CODE}`


  var xhr = new XMLHttpRequest();
  xhr.open('POST', accessTokenEndpoint, true);
  xhr.onload = function () {
      // do something to response
      console.log(this.responseText);
  };
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('Authorization', `Basic window.btoa(${YOUR_CLIENT_ID}:${CLIENT_SECRET})` )
  xhr.send(params);
}
