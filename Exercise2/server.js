const express = require('express')
const app = express()
const fetch = require('node-fetch')

app.get('/', async function(req, res){
    
    const data = new Date()
    const getGraus = async () => {

        const response = await fetch('https://api.hgbrasil.com/weather?woeid=455916')
        return await response.json()
    }
    let valueGraus = await getGraus()
    
    valueGraus = valueGraus.results.forecast    
    res.send({
        "date": data,
        "graus": valueGraus[0]
    })
})
 
app.listen(3000, function(){
    console.log('Server is running! Run Bitch, Run')
});

