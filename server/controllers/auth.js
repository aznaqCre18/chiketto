const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const model = require("../models");
const bcrypt = require("bcrypt");

const User = model.user;

//Register

exports.register = (req, res) => {
    const {
        name,
        username,
        email,
        gender,
        phone,
        address
    } = req.body

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const register = {
        name,
        username,
        email,
        password : hash,
        gender,
        phone,
        address,
        status: 0
    }

    User.create(register).then(user => {
        if(user) {
            const token = jwt.sign({
                id: user.id
            }, 'my-secret-key');

            res.send({
                message: "Success",
                token
            })
        }
    }).catch(Sequelize.ValidationError, err => {
        return res.status(406).send({
            message: "Invalid username or email."
        });
    })
    .catch(err => {
        return res.status(400).send({
            message: err.message
        });
    });
}


/*login*/

exports.login = (req, res) => {
    const {
        username,
        password
    } = req.body
    
    const login = {
        username,
        password
    }

    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(userIn => {
        if(userIn) {
            const authorize = bcrypt.compareSync(password, userIn.password);

            if(authorize) {
                const token = jwt.sign({
                    id: userIn.id
                }, 'my-secret-key');

                res.send({
                    message: "success",
                    username,
                    status: userIn.status,
                    token
                })
            }
        }
    }).catch(Sequelize.ValidationError, err => {
        return res.status(406).send({
            message: "Invalid Username or Email"
        })
    }).catch(err => {
        return res.status(400).send({
            message: err.message
        })
    })
}