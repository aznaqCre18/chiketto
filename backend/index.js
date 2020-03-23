//instantiate express module
const express = require('express')
require('express-group-routes')
var cors = require('cors')

const bodyParser = require('body-parser')
//use express in app variable
const app = express()

//cors
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");

    next();
})

//define the server port
const port = process.env.PORT || 3500;
app.use(bodyParser.json())

//create the homepage route
app.get('/', (req, res) => {
    //res means, response, and it send string "Hello Express!" to the API
    res.send('Hello Express!')
})  

const {
    authenticated
} = require('./middleware')

const AuthController = require('./controllers/auth')
const AddTicket = require('./controllers/addTiket')
const getUser = require('./controllers/getUser')
const Order = require('./controllers/orderController')

app.group("/api/v1", (router) => {
    router.post('/register', AuthController.register)
    router.post('/login', AuthController.login)
    router.post('/add-tiket', authenticated, AddTicket.add)
    router.get('/find-user', authenticated, getUser.getUserLog)
    router.get('/allTiket', AddTicket.allTiket)
    router.get('/bytime', AddTicket.allTiketByDate)
    router.get('/get-order', authenticated, Order.getOrder )
    router.post('/make-order', authenticated, Order.makeOrder)
    router.get('/order-pay', authenticated, Order.orderPay)
    router.patch('/update-sts/:id', authenticated, Order.updateIn)
})

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))