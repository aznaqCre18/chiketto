const model = require('../models')

const Order = model.order
const kereta = model.kereta
const type_kereta = model.type_kereta
const user = model.user

exports.getOrder = async (req, res) => {
    
        const id = req.user.id;
        console.log(req.user);
        
        Order.findAll({
        //    where:{status: true},
            include: [{
    
                model: kereta,
                attributes: [
                    "id",
                    "name_train",
                    "date_start",
                    "start_station",
                    "start_time",
                    "destination_station",
                    "arival_time",
                    "price"
                ],
                include:[
                {
                    model: type_kereta,
                    attributes: [
                        "id",
                        "name"
                    ]
                }]
            },
            {
                model: user,
                attributes: [
                    "id",
                    "name",
                    "username",
                    "email",
                    "gender",
                    "phone",
                    "address"
                ]
            }]
        }).then(getOrderAl => {
            if(getOrderAl) {
                res.send({
                    getOrderAl
                })
            }
        }).catch(err => { 
            return res.status(400).send({
                message: err.message
            })
        })
}



exports.makeOrder = async (req, res) => {

    const {
        no_invoice,
        id_tiket,
        qty,
        total_price
    } = req.body

    const order = {
        no_invoice,
        barcode : "null",
        id_tiket,
        id_user : req.user.id,
        qty,
        total_price,
        status: "pending",
        attachment: ''
    }
    
    Order.create(order).then(user => {
        if(user) {
            res.send({
                user
            })
        }
    }).catch(Sequelize.ValidationError, err => {
        return res.status(401).send({
            message: "Failed to Order"
        });
    })
    .catch(err => {
        return res.status(400).send({
            message: err.message
        });
    });

}

exports.orderPay = (req, res) => {
    Order.findAll({
        where: {
            id_user: req.user.id, status:"pending"
        },
        // attributes: {""}
        attributes: ["id", "no_invoice", "barcode", "qty", "total_price", "status", "attachment", "createdAt"],
        include: [
            {
                model: user,
                attributes: ["id", "name", "status", "username", "email", "password", "gender", "phone", "address"]
                
            },
            {
                model: kereta,
                attributes: ["id", "name_train", "date_start", "start_station", "start_time", "destination_station", "arival_time", "price", "qty"],
                include: [{
                    model: type_kereta,
                    attributes: ["id", "name"]
                }]
            }
        ]
    }).then(data => {
        res.send(data)
    })
}

exports.updateIn = (req, res) => {
    Order.update( req.body, {
        where: {
            id: req.params.id
        }
    }).then(reply => {
        if(reply) {
            res.send(reply)
        }else {
            message : "ERROR UPDATE"
        }
    })
}