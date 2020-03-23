import React, {Component} from 'react';
import {InputGroup, FormControl, Form, Button, Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import NavbarAdm from '../../../Component/navbar/navbarAdm';
import './addTiket.css';
import {addTiketA} from '../../../_action/addTiketA'

class AddTiket extends Component { 

    constructor(props){
        super(props)
        this.state = {
            name_train : '',
            id : '',
            date_start : '',
            start_station : '',
            start_time : '',
            destination_station : '',
            arival_time : '',
            price : '',
            qty : '',
            show: false
        }
    }

    handleAddtiket = (e) => {
        e.preventDefault()
        const addTiket = {
            name_train : this.state.name_train,
            id_type : {
                id : this.state.id
            },
            date_start : this.state.date_start,
            start_station : this.state.start_station,
            start_time : this.state.start_time,
            destination_station : this.state.destination_station,
            arival_time : this.state.arival_time,
            price : this.state.price,
            qty : this.state.qty
        }
        console.log("lIHAT aDAGA",addTiket)
        this.props.addTiketA(addTiket)
    }   

    // handleClose = () => {
    //     // console.log(data)
    //     alert("clickme")
    // }

    render() {
        const {ifSuccess} = this.props.addTiketR
        console.log(ifSuccess)
        return (
            <>
                <NavbarAdm />
                <div className="add-page">
                    <h1>Tambah Tiket</h1>
                    <div className="bungkus-form">
                    <Form onSubmit={this.handleAddtiket}>
                        <div className="input-grup">
                            {/* <label htmlFor="basic-url">Your vanity URL</label> */}
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend  className="name-trains">
                                        <InputGroup.Text name="nameTrains">
                                            <i className="trains">Nama Kereta</i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="basic-url" aria-describedby="basic-addonAA" onChange={e => this.setState({name_train : e.target.value})} autoComplete="off"/>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend className="type-train">
                                        <InputGroup.Text>
                                            <i className="type">Jenis Kereta</i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    {/* <FormControl id="basic-url" aria-describedby="basic-addonAA" onChange={e => this.setState({typeTrain : e.target.value})} autoComplete="off"/> */}
                                    <select className="choose-type-trains" onChange={e => this.setState({id : e.target.value})}>
                                        <option value="0" className="value-default">Pilih Kelas Kereta</option>    
                                        <option value="1">Eksekutif</option>
                                        <option value="2">Bisnis</option>  
                                        <option value="3">Ekonomi</option>      
                                    </select>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i className="email">Tanggal Keberangkatan</i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl autoComplete="off" type="date" placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" title="Enter a date in this formart YYYY-MM-DD" id="basic-url" aria-describedby="basic-addonAA" onChange={e => this.setState({date_start : e.target.value})}/>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i className="email">Stasiun Keberangkatan</i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="basic-url" aria-describedby="basic-addonAA" onChange={e => this.setState({start_station : e.target.value})} autoComplete="off"/>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text className="hours-go">
                                            <i className="hours">Jam Keberangkatan</i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl type="time" id="basic-url" aria-describedby="basic-addonAA" onChange={e => this.setState({start_time : e.target.value})} autoComplete="off"/>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text className="destination-station">
                                            <i className="destination">Stasiun Tujuan</i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="basic-url" aria-describedby="basic-addonAA" onChange={e => this.setState({destination_station : e.target.value})} autoComplete="off"/>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text className="arrived-hours">
                                            <i className="arrived">Jam Tiba</i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl type="time" id="basic-url" aria-describedby="basic-addonAA" onChange={e => this.setState({arival_time : e.target.value})} autoComplete="off"/>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text className="tiket-price">
                                            <i className="price-tik">Harga Tiket</i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="basic-url" aria-describedby="basic-addonAA" onChange={e => this.setState({price : e.target.value})} autoComplete="off"/>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text className="quantity">
                                            <i className="quant">Quantity</i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="basic-url" aria-describedby="basic-addonAA" onChange={e => this.setState({qty : e.target.value})} autoComplete="off"/>
                                </InputGroup>
                        </div>

                            <Button type="submit" className="add-tiket">ADD TICKET</Button>
                            {ifSuccess ? window.location.href = "http://localhost:3000/admin" : null}

                        {/* <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        className="modal-after-login"
                        show={ifSuccess}
                        >
                            <h1 className="modal-alert-pay">Sukses Menambahkan Tiket</h1>
                            <div className="okedeh" onClick={alert('aku')}>OK</div>
                        </Modal> */}
                    </Form>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        addTiketR : state.addTiketR
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTiketA : data => dispatch(addTiketA(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddTiket)

