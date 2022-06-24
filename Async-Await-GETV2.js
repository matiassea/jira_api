// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch

import fetch from 'node-fetch';
import * as dotenv from 'dotenv'; 
//https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import XLSX  from 'xlsx';
import * as fs from 'fs';

var inicio=60
var fin=66
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


        if (typeof data.fields.parent.key === 'undefined')
        {
            data.fields.parent.key = 'no hay valor'
        }
        else
        {
            data.fields.parent.key = 'undefined';
        }


        console.log(data.id)
        console.log(data.fields.summary)

        // if (typeof data.fields.parent.key === 'undefined' || data.fields.parent.key === null) {
        //     console.log("no hay")
        // }
        // console.log(data.fields.parent.key)


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
    var Excel_tickets = './Tickets.xlsx'
 
    console.log(fs.existsSync('Tickets.xlsx'))

    if (fs.existsSync('Tickets.xlsx')) {
        //file exists
        fs.unlinkSync('Tickets.xlsx')
        const workbook = XLSX.utils.book_new();
        var dataExcel = XLSX.utils.json_to_sheet(data_array);
        XLSX.utils.book_append_sheet(workbook,dataExcel,"Sheet3")  
        XLSX.writeFile(workbook,'./Tickets.xlsx')    
    }
    else
        {
        const workbook = XLSX.utils.book_new();
        var dataExcel = XLSX.utils.json_to_sheet(data_array);
        XLSX.utils.book_append_sheet(workbook,dataExcel,"Sheet3")  
        XLSX.writeFile(workbook,'./Tickets.xlsx')    
        }
    }

getData()
