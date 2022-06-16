// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch

import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();

var inicio=65
var fin=66


for (var i=inicio;i<fin;i++){
    fetch(`https://fracttal.atlassian.net/rest/api/3/issue/OP-${i}`, {
    method: 'GET',
    headers: {
        'Authorization': `Basic ${Buffer.from(
        process.env.token
        ).toString('base64')}`,
        'Accept': 'application/json'
    }
    })
    .then(response => {
        return response.json();
        //return JSON.parse(body)
    })
    //.then(text => console.log(text))
    //.then(json => console.log(json[0]))
    .then(console.log({response.key,response.key}))
    .catch(err => console.error(err));

}