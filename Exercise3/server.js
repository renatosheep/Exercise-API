const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', function(req, res){
    const salaryBrut = req.body.salaryBrut;
    const liquid = (sal) =>{
        sal -= sal * 0.1
        return sal.toFixed(2)
    }
    res.send({
        "salaryBrut": liquid(salaryBrut)
    })
});

app.listen(3000, function(){
    console.log('Server is running! Run Bitch, Run')
});