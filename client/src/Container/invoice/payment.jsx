import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../Component/navbar/navbar';
import {Table, Modal} from 'react-bootstrap'
import './payment.css'
import {connect} from 'react-redux'
import {paymentA} from '../../_action/paymentA'
import {find} from '../../_action/getUserA'

class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show : false
        }
    }

    componentDidMount() {
        this.props.paymentA()
        this.props.find()
    }

    handleModal() {
        this.setState(
            { show: !this.state.show }
            );
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

        sum = (data) => {
            let sumPrice=0 
            for( let i=0; i<= data.length-1; i++){
                sumPrice = sumPrice + data[i].total_price
            }

            return sumPrice
        }

    render() {

        const {data} = this.props.paymentR
        const {dataLu} = this.props.findUser
        

        return(
            <>
                <Navbar />
                <div className="invoice-page">
                    <h1>Invoice</h1>

                    <div className="alert-payment">
                        <img src={require("../../img/icon/Screenshot_8.png")} alt=""/>
                        <p>Silakan melakukan pembayaran memalui M-Banking, E-Banking dan ATM Ke <br/> No.rek Yang Tertera <br/><br/> No.rek : 09812312312</p>
                    </div>

                    <div className="data-buyer">
                        <div className="label-tiket">Chiketto</div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>No. Tanda Pengenal</th>
                                    <th>Nama Pemesan</th>
                                    <th>No. Handphone</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>31175033003970001</td>
                                    <td>{dataLu.find.name}</td>
                                    <td>{dataLu.find.phone}</td>
                                    <td>{dataLu.find.email}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <h2>Rincian Harga</h2>
                    <div className="invoice-pembayaran">
                        <div className="price-detail">
                            <div className="list-price">
                                <ul>
                                    {data !== null ? data.map((isi, key) => {
                                        return(
                                            <li>{isi.keretum.name_train} x 1 <i>Rp.{isi.total_price}</i></li>
                                            
                                        )
                                    }) : null}
                                </ul>
                            </div>
                            <div className="total-harga">
                                
                            <div>Total <i>Rp.{this.sum(data)}</i></div>
                            </div>
                        </div>
                        <div onClick={() => this.handleModal()} className="pay-now">
                            Bayar Sekarang
                        </div>
                        <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        className="modal-after-login"
                        show={this.state.show}
                        onHide={() => this.handleModal()}
                        >
                            <h1 className="modal-alert-pay">Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat pesanan Klik <Link to="/tiketSaya"><i>DISINI</i></Link> Terimakasih </h1>
                        </Modal>
                        <div className="upload">
                            <div className="upload-pict"></div>
                            <span>Upload Payment Proof</span>
                        </div>
                    </div>
                    <div className="train-det-grand">
                        <div className="train-det-par">
                            {data !== null ? data.map((isi, key) => {
                                return(
                                    <div className="train-detail">
                                        <div className="date-go">
                                            <h1>Kereta Api</h1>
                                            <h3>{this.takeDate(isi.createdAt)}</h3>
                                            <img className="barcod" src={require("../../img/icon/barcod.png")} alt=""/>
                                        </div>

                                        <h1 className="destinate">{isi.keretum.name_train} <br/> <i>{isi.keretum.type_keretum.name}</i> </h1>

                                        <div className="full">
                                            <div className="garis">
                                                <div className="bul1"></div>
                                                <hr/>
                                                <div className="bul2"></div>
                                            </div>

                                            <div className="berangkat">
                                                <h3>{isi.keretum.start_time}</h3>
                                                <h4>{isi.keretum.start_station}</h4>
                                            </div>  
                                    
                                            <div className="berangkat2">
                                                <h3>{isi.keretum.arival_time}</h3>
                                                <h4>{isi.keretum.destination_station}</h4>
                                            </div>

                                            <div className="destin">
                                                <h1>{isi.keretum.start_station}</h1>
                                                <h3>Stasiun {isi.keretum.start_station}</h3>
                                            </div>

                                            <div className="destin1">
                                                <h1>{isi.keretum.destination_station}</h1>
                                                <h3>Stasiun {isi.keretum.destination_station}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )

                            }) : null}
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        paymentR : state.paymentR,
        findUser : state.findUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        paymentA : data => dispatch(paymentA(data)),
        find : data => dispatch(find(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Payment);