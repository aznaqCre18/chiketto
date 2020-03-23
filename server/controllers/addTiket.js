//const Sequelize = require('sequelize');
const model = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op

const Train = model.kereta;
const TypeTrain = model.type_kereta;

exports.add = (req, res) => {

    const {
        name_train,
        id_type,
        date_start,
        start_station,
        start_time,
        destination_station,
        arival_time,
        price,
        qty
    } = req.body

    const addTiket = {
        name_train,
        id_type : id_type.id,
        date_start,
        start_station,
        start_time,
        destination_station,
        arival_time,
        price,
        qty
    }
    
    Train.create(addTiket).then(tiketAdded => {
        if(tiketAdded) {
            res.send({
                message: "Success Added Ticket"
                // id: tiketAdded.id,
                // name_train,
                // id_type : {
                //     id:tiketAdded.id_type
                // },
                // date_start,
                // start_station,
                // start_time,
                // destination_station,
                // arival_time,
                // price,
                // qty
            })
        }
    }).catch( err => {
        return res.send({
            message: err.message
        })
    })
}

    exports.allTiket = (req, res) => {
        Train.findAll({
            include: [{
                model : TypeTrain,
                attributes: ["id", "name"]
            }]
        }).then(data => {
            if(data) {
                res.send(data)
            }
        })
    }

// exports.allTiket = (req, res) => {
//     let date = new Date()
//     tahun = date.getFullYear();
//     bulan = date.getMonth() + 1
//     tanggal = date.getDate();

//     // if(bulan < 10 && tanggal < 10){
//     //     bulan = "0"+ bulan
//     //     tanggal = "0"+ tanggal
//     // } else if(bulan > 10 && tanggal < 10) {
//     //     tanggal = "0" + tanggal
//     // }

//     // const tbt = tahun + '-' + bulan + '-' + tanggal
//     console.log(date)
//     // if(bulan.length == 1) {
//     //     bulan = "0" + bulan
//     //     console.log(bulan) 
//     // }// else if((bulan.length >= 2) && (tanggal.length >= 2)){
//     //     const tbt = `${tahun}-${bulan}-${tanggal}`
//     //     console.log(tbt)
//     // }

//     // const start_time = req.query.start_time
//     // const dateTimeGte = req.query.date_time_gte
//     const dateTimeLte = req.query.date_time_lte
//     // const start_station = req.query.start_station
//     // const destination_station = req.query.destination_station
//     Train.findAll({
//         where: {
//             [Op.and]: [
//                 // {date_start : {[Op.gte]: dateTimeGte}}
//                 {date_start : {[Op.lte]: dateTimeLte}}
//             ]
//             // start_station: {[Op.like]: `%${start_station}`},
//             // destination_station: {[Op.like]: `%${destination_station}`}
//         },
//         include: [{
//             model : TypeTrain,
//             attributes: ["id", "name"]
//         }]
//     }).then(getAll => {
//         res.send(getAll)
//     })

// }

exports.allTiketByDate = (req,res) => {

    const dateTimeGte = req.query.date_time_gte
    const dateTimeLte = req.query.date_time_lte
    Train.findAll({
        where: {
            [Op.and]: [
                
                { date_start : {[Op.lte]: dateTimeGte} },
                { date_start : {[Op.gte]: dateTimeLte} }
            ]
            
        },
        include: [{
            model : TypeTrain,
            attributes: ["id", "name"]
        }]
    }).then(getAll => {
        res.send(getAll)
    })
}