// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch

import fetch from 'node-fetch';
import * as dotenv from 'dotenv'; 
//https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

var inicio=65
var fin=90
var data_array = [];

async function getData () {
    try {
    for (var i=inicio;i<fin;i++){
        const response = await fetch(`https://fracttal.atlassian.net/rest/api/3/issue/OP-${i}`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${Buffer.from(
                process.env.token
                ).toString('base64')}`,
                'Accept': 'application/json'
            }
            })
        const data = await response.json(); 
        
        // const Array_ticket=[data.id,data.fields.parent.key,data.fields.summary,data.fields.issuetype.description,data.fields.duedate];

        // console.log(Array_ticket)
        // console.log(typeof(Array_ticket))

        const Object_ticket=({"id":data.id, "key":data.fields.parent.key, "summary":data.fields.summary,"desccripcion":data.fields.issuetype.description,"duedate":data.fields.duedate});

        //https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await
        // https://stackoverflow.com/questions/42964102/syntax-for-an-async-arrow-function
        // https://stackoverflow.com/questions/40884153/try-catch-blocks-with-async-await

        console.log(Object_ticket)
        // console.log(typeof(Object_ticket))

        data_array.push(Object_ticket);
        // console.log(data_array);
        // console.log(data_array.length);
        
        //https://stackoverflow.com/questions/5892569/responding-with-a-json-object-in-node-js-converting-object-array-to-json-string
        
        // var json = JSON.stringify(Object_ticket);
        // console.log(json)
        // console.log(typeof(json))
    }  
    }
    catch (error)
    {
        console.error(error);
    }
}

getData();
