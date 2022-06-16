// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch

import fetch from 'node-fetch';
// import {} from 'dotenv/config'
import * as dotenv from 'dotenv';
dotenv.config();
import XLSX  from 'xlsx';

var url= 'https://fracttal.atlassian.net/rest/api/3/issue/'

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

const getData = async() => {
    try {
    const workbook = XLSX.readFile('./Creation.xlsx');
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    var dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    var size = Object.keys(dataExcel).length;
    console.log(size)

    for (var i = 0;i<size;i++) {
        var summary=Object.values(dataExcel)[i].Summary
        var text=Object.values(dataExcel)[i].Text
        var labels=Object.values(dataExcel)[i].Labels
        var assignee=Object.values(dataExcel)[i].Assignee
        var project=Object.values(dataExcel)[i].Project

        console.log(`${summary} ${text} ${labels} ${assignee} ${project}`)
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${Buffer.from(
            process.env.token
            ).toString('base64')}`, 
            'Content-Type': 'application/json'
        },
        body: `{
            "fields": {
                "summary": "${summary}",
                "description": {
                    "type": "doc",
                    "version": 1,
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "text": "${text}",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                },
                "labels": [
                    "${labels}"
                ],
                "assignee": {
                    "id": "${assignee}"
                },
                "issuetype": {
                    "id": "10155",
                    "url": "https://fracttal.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium"
                },
                "project": {
                    "id": "${project}"
                }
            }
        }`
        })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))

    }
    }
    catch (error)
    {
        console.error(error);
    }
}

getData();

//https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await


    // (async () => {
    //     const rawResponse = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //         },
    //         body: informacion
    //     });
    //     const content = await rawResponse.json();
        
    //     console.log(content);
    //     })();