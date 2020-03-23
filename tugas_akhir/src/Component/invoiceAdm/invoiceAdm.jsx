import React, {Component} from 'react';
import { Button, Modal, Image, Table } from 'react-bootstrap';
import './invoiceAdm.css';
import './../../Container/homepage/homepage.css'
import {Link} from 'react-router-dom';
//import MenuUtama from './../../../container/menuUtama/menuUtama';
// import { Redirect } from 'react-router-dom';
// import {connect} from 'react-redux'
// import {login} from './../../../_action/loginA'


class Invoice extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show : false
        }
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
    
    render() {
        const data = this.props.isi
        return (
        <>
            <Image onClick={() => {this.handleModal()}} src={require('../../img/icon/search.png')}/>
                <Modal
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="modal"
                    show={this.state.show}
                    onHide={() => this.handleModal()}
                >
                    <Image onClick={() => this.handleModal()} className="close-invoice" src={require("../../img/icon/close.png")}/>
                    <div className="title-invoice">
                        <p className="bold-invoice">INVOICE</p>
                        <p className="child-invoice">Kode Invoice : {data.no_invoice}</p>
                    </div>
                    <div className="transportasi">
                        <p className="name-trans">Kereta Api</p>
                        <p className="date-go">{this.takeDate(data.createdAt)}</p>
                        <Image className="img-barcode2" src={require("../../img/icon/barcod2.png")} />
                    </div>
                    <div className="type-train-invoice">
                        <p className="bold-type">{data.keretum.name_train}</p>
                        <p className="child-type">{data.keretum.type_keretum.name}</p>
                    </div>

                    <div className="fully">
                        <div className="garis">
                            <div className="bul1"></div>
                            <hr/>
                            <div className="bul2"></div>
                        </div>

                        <div className="kumpulan">
                            <div className="berangkat3">
                                <h3>{data.keretum.start_time}</h3>
                                <h4>{this.takeDate(data.keretum.date_start)}</h4>
                            </div>  
                            
                            <div className="berangkat2">
                                <h3>{data.keretum.arival_time}</h3>
                                <h4>{this.takeDate(data.keretum.date_start)}</h4>
                            </div>

                            <div className="destinate-adm">
                                <h1>Jakarta (GMR)</h1>
                                <h3>Stasiun Gambir</h3>
                            </div>

                            <div className="destinate-arv">
                                <h1>Surabaya (SBY)</h1>
                                <h3>Stasiun Surabaya</h3>
                            </div> 
                        </div>

                    </div>

                    <div className="pict-proof"></div>
                    <div className="tabel-invoice-adm">
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>No. Tanda Pengenal</th>
                                    <th>Nama Pemesan</th>
                                    <th>No. Handphone</th>
                                    <th>E-Mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>31175033003970001</td>
                                    <td>{data.user.name}</td>
                                    <td>{data.user.phone}</td>
                                    <td>{data.user.email}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Modal>
        </>
        );
    }
}

// const mapStateToProps = state => {
//     // console.log('DATA REDUX',state)
//     return {
//         loginR: state.loginR
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         login: (data) => dispatch(login(data))
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Invoice;