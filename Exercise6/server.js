const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/', (req, res) => {
    const {max_velocity_allowed, car_velocity} = req.body

    let info = []
    
    const ticket = (velocity, velocityMax) => {
        let percentExceeded = ((velocity - velocityMax) / velocityMax) * 100
        if(percentExceeded >= 10){
            info = [
                {
                    traffic_ticket: true,
                    velocity__exceeded: velocity - velocityMax,
                    percentage_exceeded: percentExceeded.toFixed(2) + "%"
                }
            ]
        } else if(percentExceeded >= 1){
            info = [
                {
                    traffic_ticket: false,
                    velocity__exceeded: velocity - velocityMax,
                    percentage_exceeded: percentExceeded.toFixed(2) + "%"
                }
            ]
        } else {
            info = [
                {
                    traffic_ticket: false,
                    velocity__exceeded: 0,
                    percentage_exceeded: 0 + "%"
                }
            ]
        }
    }
    ticket(car_velocity, max_velocity_allowed)
    res.send(info)
})

app.listen(8080, function(){
    console.log('Server is running! Run Bitch, Run')
});