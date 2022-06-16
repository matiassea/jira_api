// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch

import fetch from 'node-fetch';
//import {} from 'dotenv/config'
import * as dotenv from 'dotenv';
dotenv.config();

var url= 'https://fracttal.atlassian.net/rest/api/3/issue/'

var titulo = "tin tin"


var informacion =
`{
    "fields": {
        "summary": "tin tin",
        "description": {
            "type": "doc",
            "version": 1,
            "content": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "text": "Order entry fails when selecting supplier.",
                            "type": "text"
                        }
                    ]
                }
            ]
        },
        "labels": [
            "Entrega_de_Equipos"
        ],
        "assignee": {
            "id": "610867e6c51f3a0069e66382"
        },
        "issuetype": {
            "id": "10155",
            "url": "https://fracttal.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium"
        },
        "project": {
            "id": "10084"
        }
    }
}`;

fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': `Basic ${Buffer.from(
        process.env.token
        ).toString('base64')}`, 
        'Content-Type': 'application/json'
    },
    body: informacion
    })
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.error(err))


(async () => {
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: informacion
    });
    const content = await rawResponse.json();
    
    console.log(content);
    })();