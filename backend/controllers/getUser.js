//import {sequelize} from "sequelize";
const model = require('../models')

const Users = model.user

exports.getUserLog = (req, res) => {
    Users.findOne({
        where: {
            id: req.user.id
        },
        attributes :  ["id", "name", "username", "email", "gender", "phone", "address"]
    }).then(find => {
        if(find) {
            res.send({
                find
            })
        }else if(find == null) {
            res.send({
                messege: "Data NULL"
            })
        }
    }).catch(err => { 
        return res.status(400).send({
            message: err.message
        })
    })
}