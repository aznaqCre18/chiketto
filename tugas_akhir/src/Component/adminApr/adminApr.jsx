import React, {Component} from 'react';
import {Modal, Image, Form } from 'react-bootstrap'
import './adminApr.css'
import {connect} from 'react-redux'
import Axios from 'axios'

import {paymentA} from '../../_action/paymentA'

class AdminApr extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show : false,
            status: 'approve'
        }
    }

    componentDidMount() {
        this.props.paymentA()
    }

    handleModal() {
        this.setState(
            { show: !this.state.show }
            );
        }

        handleSelect = (e) => {
            this.setState({
                status: e.target.value
            })
        }


        handleClick = async() => {
            try {
                //Consum API
                const token = localStorage.getItem('token')
                const result = await Axios({
                    method: "PATCH",
                    data: {
                        status : this.state.status
                    },
                    url: 'http://localhost:3500/api/v1/update-sts/' + this.props.isi.id,
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                })
                window.location.href = "http://localhost:3000/admin"
            } catch (err) {
                console.log(err.message)
            }
        }
    

    render() {

        const {data} = this.props.paymentR
        console.log(data);
        console.log(this.props.isi)
        const data2 = this.props.isi

        return (
            <>
                <Image onClick={() => {this.handleModal()}} src={require("../../img/icon/edit.png")} />

                <Modal
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="modal"
                    show={this.state.show}
                    onHide={() => this.handleModal()}
                >

                    <div className="top-label">Chiketo</div>
                    <Image onClick={() => this.handleModal()} className="close-set-aprove" src={require("../../img/icon/close.png")}/>                        
                    <Modal.Body>
                        <div className="label-form-pay">Set Status Payement</div>
                        <div className="grup-aprove">
                            <Form.Group>
                                <br />
                                <Form.Control type="text" value={data2.id} disabled/>
                                <br />
                                <Form.Control type="text" value={data2.user.name}  disabled/>
                                <br />
                                <Form.Control type="text" value={data2.keretum.name_train}  disabled/>
                                <br />
                                <Form.Control type="text" value={data2.attachment} disabled/>
                                <br />
                                
                                <select className="dropdown-confirm" name="confirm" id="confirmation" onChange={this.handleSelect}>
                                    <option value="approve">APPROVE</option>
                                    <option value="pending">PENDING</option>
                                    <option value="cancel">CANCEL</option>
                                </select>
                                <br />

                                <div className="save-set-aprove" onClick={this.handleClick}>SAVE</div>
                            </Form.Group>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        paymentR : state.paymentR
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        paymentA : data => dispatch(paymentA(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminApr);