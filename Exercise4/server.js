const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/', function(req, res){
    
    last_name = req.body.last_name; 
    const total = last_name.length  
    console.log (total)
    res.send({
        "last_name": last_name,
        "total": total
    })
});

app.listen(8080, function(){
    console.log('Server is running! Run Bitch, Run')
});