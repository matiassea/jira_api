Este es el archivo para conectarse por medio de API a Jira.

## Shortcuts.
Command Palette (Ctrl+Shift+P)

Run the Markdown: Open Preview to the Side command

https://code.visualstudio.com/docs/languages/markdown


## Roadmap de desarrollo
Creacion de codigo en maquina local

Subida de codigo a Git Hub

Configuracion de servidor AWS

Descarga de codigo en Servidor AWS

Configuracion de Power Automate por medio del mmodulo HTTP

Testeo


## Para hacer los deposito a GitHub
git status

git add .

git commit -m "TEST TEST"

Crear inmediatamente la rama y depositar

Consulta de la rama actual => git branch 

Create Branch => git checkout -b [branch]

Cambiar rama => git checkout [branch]

Para enviar los cambios al repositorio remoto => git push origin [branch]

## Observaciones de libreria

La libreria de XLS se instala npm install --save xlsx

## Datos de Jira
### Project

"id": "10077", "name": "Gestión Personas", "key": "GP"

"id": "10084", "name": "Compras Operaciones", "key": "PURCHASING"

"id": "10085", "name": "FRACTTAL OPS SQUAD", "key": "OP"

"id": "10087", "name": "Requerimientos Operaciones", "key": "REQUESTING"

### Usuarios
jose.zaa@fracttal.com "70121:84b7ed24-5766-44ae-84e5-415e30766fe2"

diana.pabon@fracttal.com "610866dd75ad96006920f449"

diana.ruiz@fracttal.com "610867e6c51f3a0069e66382"

Oswaldo.smarrelli@fracttal.com "628ffec7ab963e006fe96b9a"

sofia.gonzalez@fracttal.com "6099b5999fd9f30067097faf"

operaciones.brasil@fracttal.com "62a389219b728c006a95caf4"

ibonne.gonzalez@fracttal.com "6297d3bfa0eafd0069e8c4d5" 

jose.araujo@fracttal.com "629fba639248fe006911f174"

alejandro.paez@fracttal.com "6298c13d1a2bdf007095f937"

maria.galvis@fracttal.com "628ff464269a9a0068f3e379"

### Etiquetas

"Brasil"
"Chile"
"Colombia"
"España"
"Mexico"
"Entrega_de_Equipos"
"gestiónCorporativa"
"Gestión_de_eventos"
"Gestión_Documental_Clientes"
"Gestión_Documental_Legal"
"Gestión_Documental_Proveedores"
"Gestión_Documental_RRHH"
"Gestión_Inventarios"
"Recibo/Envio-Paquetes/Documentos"
"Reuniones_Generales"
"Solicituddematerial"
"Tramites"
"Urgente"

## Codigos para servidor AWS

Para entrar como administrador => sudo su 
Para borrar directorio => rmdir [directory]
Para borrar directorio no vacio => rm -r [directory]
Para clonar => Git clone <remote-repo-url>
Para clonar una branch en especifico => git clone --branch <branchname> <remote-repo-url>



if(equals(outputs('Create_item')?['body/Oficina'],'Chile'),'diana.ruiz@fracttal.com; jose.araujo@fracttal.com; alejandro.paez@fracttal.com',if(equals(outputs('Create_item')?['body/Oficina'],'Colombia'),'ibonne.gonzalez@fracttal.com',if(equals(outputs('Create_item')?['body/Oficina'],'Mexico'),'sofia.gonzalez@fracttal.com',if(equals(outputs('Create_item')?['body/Oficina'],'Brasil'),'operaciones.brasil@fracttal.com',
if(equals(outputs('Create_item')?['body/Oficina'],'España'),'diana.pabon@fracttal.com','Sin filial')))))

if(equals(outputs('Create_item')?['body/Oficina'],'Chile'),'610867e6c51f3a0069e66382',if(equals(outputs('Create_item')?['body/Oficina'],'Colombia'),'6297d3bfa0eafd0069e8c4d5',if(equals(outputs('Create_item')?['body/Oficina'],'Mexico'),'6099b5999fd9f30067097faf',if(equals(outputs('Create_item')?['body/Oficina'],'Brasil'),'62a389219b728c006a95caf4',if(equals(outputs('Create_item')?['body/Oficina'],'España'),'610866dd75ad96006920f449','Sin filial')))))



jose.zaa@fracttal.com "70121:84b7ed24-5766-44ae-84e5-415e30766fe2"
maria.galvis@fracttal.com "628ff464269a9a0068f3e379"

if(equals(outputs('Create_item')?['body/Oficina'],'Chile'),'jose.zaa@fracttal.com',if(equals(outputs('Create_item')?['body/Oficina'],'Colombia'),'maria.galvis@fracttal.com',if(equals(outputs('Create_item')?['body/Oficina'],'Mexico'),'maria.galvis@fracttal.com',if(equals(outputs('Create_item')?['body/Oficina'],'Brasil'),'jose.zaa@fracttal.com',
if(equals(outputs('Create_item')?['body/Oficina'],'España'),'jose.zaa@fracttal.com','Sin filial')))))

if(equals(outputs('Create_item')?['body/Oficina'],'Chile'),'70121:84b7ed24-5766-44ae-84e5-415e30766fe2',if(equals(outputs('Create_item')?['body/Oficina'],'Colombia'),'628ff464269a9a0068f3e379',if(equals(outputs('Create_item')?['body/Oficina'],'Mexico'),'628ff464269a9a0068f3e379',if(equals(outputs('Create_item')?['body/Oficina'],'Brasil'),'70121:84b7ed24-5766-44ae-84e5-415e30766fe2',if(equals(outputs('Create_item')?['body/Oficina'],'España'),'70121:84b7ed24-5766-44ae-84e5-415e30766fe2','Sin filial')))))



triggerBody()['text_1']


if(equals(triggerBody()['text_1'],'Chile'),'diana.ruiz@fracttal.com; jose.araujo@fracttal.com; alejandro.paez@fracttal.com',if(equals(triggerBody()['text_1'],'Colombia'),'ibonne.gonzalez@fracttal.com',if(equals(triggerBody()['text_1'],'Mexico'),'sofia.gonzalez@fracttal.com',if(equals(triggerBody()['text_1'],'Brasil'),'operaciones.brasil@fracttal.com',if(equals(triggerBody()['text_1'],'España'),'diana.pabon@fracttal.com','Sin filial')))))

if(equals(triggerBody()['text_1'],'Chile'),'610867e6c51f3a0069e66382',if(equals(triggerBody()['text_1'],'Colombia'),'6297d3bfa0eafd0069e8c4d5',if(equals(triggerBody()['text_1'],'Mexico'),'6099b5999fd9f30067097faf',if(equals(triggerBody()['text_1'],'Brasil'),'62a389219b728c006a95caf4',if(equals(triggerBody()['text_1'],'España'),'610866dd75ad96006920f449','Sin filial')))))



if(equals(triggerBody()['text_1'],'Chile'),'jose.zaa@fracttal.com',if(equals(triggerBody()['text_1'],'Colombia'),'maria.galvis@fracttal.com',if(equals(triggerBody()['text_1'],'Mexico'),'maria.galvis@fracttal.com',if(equals(triggerBody()['text_1'],'Brasil'),'jose.zaa@fracttal.com',
if(equals(triggerBody()['text_1'],'España'),'jose.zaa@fracttal.com','Sin filial')))))


if(equals(triggerBody()['text_1'],'Chile'),'70121:84b7ed24-5766-44ae-84e5-415e30766fe2',if(equals(triggerBody()['text_1'],'Colombia'),'628ff464269a9a0068f3e379',if(equals(triggerBody()['text_1'],'Mexico'),'628ff464269a9a0068f3e379',if(equals(triggerBody()['text_1'],'Brasil'),'70121:84b7ed24-5766-44ae-84e5-415e30766fe2',if(equals(triggerBody()['text_1'],'España'),'70121:84b7ed24-5766-44ae-84e5-415e30766fe2','Sin filial')))))