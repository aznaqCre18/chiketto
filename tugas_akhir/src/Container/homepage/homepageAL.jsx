import React, {Component} from "react";
import { Jumbotron, Container, Table, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './homepage.css'
import Navbar from './../../Component/navbar/navbar';
import {find} from './../../_action/getUserA'
import {allTiketA} from '../../_action/addTiketA'
import Buy from '../../Component/buy/buy'

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state= {
            count : 0,
            count2 : 0,
            asal: '',
            tujuan: ''
        }
    }

    componentDidMount() {
        return (           
            this.props.find(),
            this.props.allTiketA()
        )
    }

    handleModal() {
        this.setState(
            { show: !this.state.show }
            );
        }

    handlePlus = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    handleMin = () => {
        if(this.state.count >= 1) {
            this.setState({
                count : this.state.count - 1
            })
        }
    }

    handlePlus2 = () => {
        this.setState({
            count2 : this.state.count2 + 1
        })
    }

    handleMin2 = () => {
        if(this.state.count2 >= 1) {
            this.setState({
                count2 : this.state.count2 - 1
            })
        }
    }

    handleChangeAsal = (e) => {
        this.setState({
            asal: e.target.value
        }, () => console.log(this.state.asal))
        
    }

    handleChangeTujuan = (e) => {
        this.setState({
            tujuan: e.target.value
        }, () => console.log(this.state.tujuan))
    }

    handleSwap = (e) => {
        this.setState({
            asal : this.state.tujuan,
            tujuan : this.state.asal
        })
    }

    diff = (start, end) => {
        start = start.split(":");
        end = end.split(":");
        var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        var endDate = new Date(0, 0, 0, end[0], end[1], 0);
        var diff = Math.abs(endDate.getTime() - startDate.getTime());
        var hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / 1000 / 60);
        
        return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
    }
    
    render() {
        const {error} = this.props.findUser
        const {dataTiket} = this.props.allTiketR
        console.log("Lihatdata",dataTiket)
        console.log(error)
        if(error === true) {
            window.location.href = "http://localhost:3000/";
        }
        return(
        <>
            <>
                <Navbar/>
                <Jumbotron fluid className="jumbotron">
                    <Container>
                        <h1 className="title-jbt">Hallo, Ticket Seekers !</h1>
                        <p className="slog1">
                            Ingin Mudik dengan Good Deals ?
                        </p>
                        <p className="slog2">
                            Masuk atau Daftar Sekarang Juga !!
                        </p>

                        <div className="adv"></div>
                        <div className="adv2"></div>
                    </Container>
                </Jumbotron>
                <div className="parrent-filter">
                    <div className="filter-title">
                        <div className="kategori">
                            <div className="rec"></div>
                            <img src={require("../../img/icon/train-icon.png")} alt=""/>
                            <span>Tiket Kereta Api</span>
                        </div>
                    </div>
                    <div className="filter">
                        <h1>Tiket Kereta Api</h1>
                        <div>
                            <p>Asal</p>
                            <input className="destination" onChange={this.handleChangeAsal} placeholder="Masukan Kota Asal"/>
                        </div>
                        <div className="swapIcon">
                            <img src={require("../../img/icon/swapicon.png")} onClick={this.handleSwap} alt="swap"/>
                        </div>
                        <div className="input-tujuan">
                            <p>Tujuan</p>
                            <input className="destination" onChange={this.handleChangeTujuan} placeholder="Masukan Kota Tujuan"/>
                        </div>
                        <div className="child-fiter">
                            <span className="tgl">Tanggal Berangkat</span> <br/>
                            <input className="date" type="date"/>
                            <div className="check">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1">Pulang Pergi</label>
                            </div>

                            <div className="qty">
                                <span className="dewasa">Dewasa</span>
                                <div className="countAdult">
                                    <span className="min" onClick={this.handleMin}>-</span><span className="count"><hr/>{this.state.count}</span><span onClick={this.handlePlus} className="plus">+</span>
                                </div>
                                <span className="child">Bayi</span>
                                <div className="countAdult2">
                                    <span onClick={this.handleMin2} className="min">-</span><span className="count"><hr/>{this.state.count2}</span><span  onClick={this.handlePlus2} className="plus">+</span>
                                </div>
                                <div className="searchTicket">CARI TIKET</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="result-tiket">
                    <Table hover>
                    <thead>
                        <tr>
                            <th>Nama Kereta</th>
                            <th>Berangkat &nbsp; &nbsp;</th>
                            <th>Tiba &nbsp; &nbsp;</th>
                            <th>Durasi</th>
                            <th>Harga Per Orang</th>
                        </tr>
                    </thead>
                    </Table>
                    {dataTiket.map((isi, key) => {
                        return (
                            <div className="hasil-sell" key={isi.id}>
                                <div className="kereta-sell">
                                    <h3>{isi.name_train}</h3>
                                    <p>{isi.type_keretum.name}</p>
                                </div>

                                <div className="berangkat-sell">
                                    <h3>{isi.start_time}</h3>
                                    <p>Stasiun {isi.start_station}</p>
                                </div>

                                <div className="tiba-sell">
                                    <h3>{isi.arival_time}</h3>
                                    <p>Stasiun {isi.destination_station}</p>
                                </div>

                                <div className="durasi-sell">
                                    <h3>{this.diff( isi.arival_time, isi.start_time)} Jam</h3>
                                </div>

                                <div className="price-sell">
                                    <h3>Rp.{isi.price}</h3>
                                </div>

                                <div>
                                    <Buy isi={isi}/>
                                </div>
                            </div>
                        )
                    })}

                    {/* <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="modal-after-login"
                    show={this.state.show}
                    onHide={() => this.handleModal()}
                    >
                        
                        <h1 className="modal-alert-pay">Tiket Anda Berhasil Ditambahkan Silahkan Segera Melakukan Pembayaran <br/> Klik <Link to="/tiketSaya"><i>DISINI</i></Link></h1>
                    </Modal>  */}
                </div>
            </>
            <>
                <div className="footers"></div>
            </>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("inicuk => ",state)
    return{
        findUser : state.findUser,
        allTiketR : state.allTiketR
    }
}

const mapDispatchToProps = dispatch => {
    return {
        find : (data) => dispatch( find(data) ),
        allTiketA : data => dispatch(allTiketA(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)