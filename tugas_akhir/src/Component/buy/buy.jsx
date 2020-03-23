import React, {Component} from 'react'
import {Modal, Container, Col, Row, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Axios from 'axios'

import './buy.css'

class Buy extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show : false
        }
    }

        handleBuyTiket = async () => {
            try {
        
            const reqData = {
                qty: 1,
                total_price: this.props.isi.price,
                no_invoice: 'INV1',
                id_tiket: this.props.isi.id
            };
            console.log(reqData)
            const token = window.localStorage.getItem('token')
        
            const result2 = await Axios({
                method: "POST",
                url: "http://localhost:3500/api/v1/make-order",
                headers: {Authorization: `Bearer ${token}`},
                data: reqData
            });
        } catch(err){
            console.log(err.message);
        }
    }


    takeDate = (fullDate) => {
        const day = ["Senen", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"]
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        const date = new Date(fullDate)
        let hari = date.getDay()
        let tanggal = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()

        let tgl = day[hari] + ", " + tanggal + " " + months[month] + " " + year  

        return tgl
    }

    handleModal = () => {
        this.setState({
            show : !this.state.show
        })
    }

    render() {
        console.log("INIKAAKSd", this.props.isi);
        const data = this.props.isi
        
        return (
            <>
                <span onClick={() => {this.handleModal()}} className="buy-modal" variant="light">Buy</span>
            
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal"
                show={this.state.show}
                onHide={() => this.handleModal()}
            >
                    <Container>
                        <Row>
                            <Col sm={8}></Col>
                            <Col sm={4}>
                                <h1 className="header">Kereta Api <br/> <i>{this.takeDate(data.createdAt)}</i></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 className="name-train">{data.name_train}<br/> <i>{data.type_keretum.name}</i></h1>
                            </Col>
                        </Row>

                        <Row className="jalan">
                            <Col>
                                <h1 className="jalan-time">{data.start_time}</h1>
                                <i>{this.takeDate(data.createdAt)}</i>
                            </Col>
                            <Col>
                                <h1 className="tujuan">Stasiun {data.start_station}</h1>
                            </Col>
                        </Row>
                        <Image className="aku" src={require("../../img/icon/atasbawah.png")}/>

                        <Row className="jalan">
                            <Col>
                                <h1 className="jalan-time">{data.arival_time}</h1>
                                <i>{this.takeDate(data.createdAt)}</i>
                            </Col>
                            <Col>
                                <h1 className="tujuan">Stasiun {data.destination_station}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/tiketSaya">
                                    <div className="buyBut" onClick={() => this.handleBuyTiket()}>BUY</div>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
            </Modal>
            </>
        )
    }
}

export default Buy;