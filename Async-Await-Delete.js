import fetch from 'node-fetch';
// import {} from 'dotenv/config'
import * as dotenv from 'dotenv';
dotenv.config();
import XLSX  from 'xlsx';


var inicio=0
var fin=180
var data_array = [];


// var url= `https://fracttal.atlassian.net/rest/api/3/issue/OP-${i}`

const DeleteData = async() => {

    try {
        for (var i=inicio;i<fin;i++){
    // const workbook = XLSX.readFile('./Creation.xlsx');
    // const workbookSheets = workbook.SheetNames;
    // const sheet = workbookSheets[0];
    // var dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    // var size = Object.keys(dataExcel).length;
    // console.log(size)

    // for (var i = 0;i<size;i++) {
    //     var summary=Object.values(dataExcel)[i].Summary
    //     var text=Object.values(dataExcel)[i].Text
    //     var labels=Object.values(dataExcel)[i].Labels
    //     var assignee=Object.values(dataExcel)[i].Assignee
    //     var project=Object.values(dataExcel)[i].Project
    //     var due_date=Object.values(dataExcel)[i].Due_Date.toString() //'The duedate must be of the format "yyyy-MM-dd"
    //     var start_date=Object.values(dataExcel)[i].Start_Date.toString()
    //     var pais=Object.values(dataExcel)[i].Pais.toString()

    //     console.log(typeof(`${due_date}`))
    //     console.log(`${due_date}`)

    //     console.log(`${summary} ${text} ${labels} ${assignee} ${project} ${due_date} ${start_date} ${pais}`)
    fetch(`https://fracttal.atlassian.net/rest/api/3/issue/OP-${i}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Basic ${Buffer.from(
            process.env.token
            ).toString('base64')}`, 
            'Content-Type': 'application/json'
        },
        })
    .then(response => {console.log(
        `Response: ${response.status} ${response.statusText}`);
        return response.text();
    })
    .then(text => console.log(text))

    }
    }

    catch (error)
    {
        console.error(error);
    }
}

DeleteData();