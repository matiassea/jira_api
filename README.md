# jira_api
Application Jira api

### Datos del Projecto 
"https://fracttal.atlassian.net/rest/api/latest/project/OP"

Project "key": "OP"
"id": "10085"

*****************************************************************************************
Para encontrar el API Key
Powershell

$Text = ‘email:token’
$Bytes = [System.Text.Encoding]::UTF8.GetBytes($Text)
$EncodedText = [Convert]::ToBase64String($Bytes)
$EncodedText

Basic [resultado_superior PowerShell]

*****************************************************************************************
Link root => https://matias.atlassian.net/

*****************************************************************************************

Authorization => Api Key
Key => Authorization
Value => Basic [resultado_superior PowerShell]

*****************************************************************************************
Creacion de Issue

https://fracttal.atlassian.net/rest/api/3/issue/

{
    "fields": {
        "summary": "Test3",
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
            "id": "10157",
            "url": "https://fracttal.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium"
        },
        "project": {
            "id": "10085"
        }
    }
}

En JSON
Authorization => API key, Basic XXXXXXXXX
Content-Type =>application/json
*****************************************************************************************


