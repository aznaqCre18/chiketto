import React, {Component} from 'react';
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './tiketSaya.css'
import Navbar from './../../Component/navbar/navbar';
import {tiketUserA} from './../../_action/tiketUserA'

class TiketSaya extends Component {
    
componentDidMount() {
    return(
        this.props.tiketUserA()
    )
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

    handleClick = () => {
        window.location.href = "http://localhost:3000/payment"
    }



    render() {

        const {data} = this.props.tiketUserR
        console.log("ADA YANG ABRU NI => ", data)

        return(
            <>
                <Navbar/>

                <h1 className="title-tiket">Tiket Saya</h1>

                {data !== null ? data.map((isi, key) => {
                    
                    return(
                        <div className="containersau">
                            <div className="headerku">Chiketto</div>
                            <div className="kop">
                                <h1>Kereta Api</h1>N
                                <h3><i>Kereta Api</i>, {this.takeDate(isi.createdAt)}</h3>
                            </div>

                            <div className="keretainv">
                                <h1>{isi.keretum.name_train}</h1>
                                <h3>{isi.keretum.type_keretum.name}</h3>
                                {isi.status === "pending" ? <h4 className="pending1">PENDING</h4> : <h4><h4 className="appr">APPROVE</h4></h4>}
                            </div>
                            <div className="full">
                                <div className="garis">
                                    <div className="bul1"></div>
                                    <hr/>
                                    <div className="bul2"></div>
                                </div>

                                <div className="go2">
                                    <h1>{isi.keretum.start_time}</h1>
                                    <h3>{this.takeDate(isi.keretum.date_start)}</h3>
                                </div>  
                        
                                <div className="go3">
                                    <h1>{isi.keretum.arival_time}</h1>
                                    <h3>{this.takeDate(isi.keretum.date_start)}</h3>
                                </div>

                                <div className="dest">
                                    <h1>{isi.keretum.start_station}</h1>
                                    <h3>Stasiun {isi.keretum.start_station}</h3>
                                </div>  
                        
                                <div className="dest2">
                                    <h1>{isi.keretum.destination_station}</h1>
                                    <h3>Stasiun {isi.keretum.destination_station}</h3>
                                </div>
                            </div>

                            <Table responsive className="tab">
                            <thead>
                                <tr>
                                <th>No. Tanda Pengenal</th>
                                <th>Nama Pemesan</th>
                                <th>No. Handphone</th>
                                <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>31175033003970001</td>
                                    <td>{isi.user.name}</td>
                                    <td>{isi.user.phone}</td>
                                    <td>{isi.user.email}</td> 
                                </tr>
                            </tbody>
                            </Table>
                            {/* <Link to="/payment">
                            </Link> */}
                                {isi.status !== "approve" ? <div className="pay-now"  onClick={this.handleClick}>Bayar Sekarang</div> : <div className="pay-now"> Detail Tiket </div>}
                        </div>
                    )
                }) : null}
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        tiketUserR : state.tiketUserR
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        tiketUserA: data =>  dispatch(tiketUserA(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TiketSaya);