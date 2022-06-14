const headers = () => 
    'Authorization': `Basic ${Buffer.from(
        'matias.vidal@fracttal.com:ggTkVxDZjoU8Xye9jLoU2AC6'
    ).toString('base64')}`,
    'Accept': 'application/json'

    
module.exports = {
    headers
}