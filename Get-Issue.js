// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch

//const fetch = require('node-fetch');
import fetch from 'node-fetch';
//const { mostrarMenu } = require ('./route/get') //Para buscar el archivo get


fetch('https://fracttal.atlassian.net/rest/api/3/issue/OP-27', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'matias.vidal@fracttal.com:PUEMG6VRkCVaCIfCKkY2A2D5'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.json();
    //return JSON.parse(body)
  })
  //.then(text => console.log(text))
  //.then(json => console.log(json[0]))
  .then(json => console.log(json))
  .catch(err => console.error(err));