import React, {Component, useState} from 'react';
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'

import './adminAL.css';
import NavbarAdm from '../../../Component/navbar/navbarAdm';
import AdminApr from '../../../Component/adminApr/adminApr';
import Invoice from '../../../Component/invoiceAdm/invoiceAdm';
import {find} from '../../../_action/getUserA'
import {tiketUserA} from '../../../_action/tiketUserA'

class AdminLA extends Component {

    componentDidMount() {
        this.props.find()
        this.props.tiketUserA()
    }

    // handleStatus = (inner) => {
    //         if(inner === "approve") {
    //             <td className="approve">APPROVE</td>
    //         } else if(inner === "pending") {
    //             <td className="pending">PENDING</td>
    //         } else if(inner === "cancel") {
    //             <td className="cancel">CANCEL</td>
    //         }
    // }   

    render() {
        const {error} = this.props.findUser
        const {data} = this.props.tiketUserR
        console.log(data)

        if (error === true) {
            window.location.href= "http://localhost:3000/"
        }
        return(
            <>
                <NavbarAdm/>
                <div className="tabel-order">
                    <h1 className="header-admin">List Transaksi</h1>
                    <Table striped hover>
                        <thead>
                            <th>No.</th>
                            <th>User</th>
                            <th>Tiket</th>
                            <th>Bukti Transfer</th>
                            <th>Status Payment</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {data!== null ? data.map((isi, index) => {
                                return(
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{isi.user.name}</td>
                                        <td>{isi.keretum.start_station} - {isi.keretum.destination_station}</td>
                                        <td>{isi.attachment}</td>
                                            <td>
                                                <div className={isi.status}>
                                                    {isi.status}
                                                </div>
                                            </td>
                                        
                                        <td>
                                            {/* <img src={require("../../../img/icon/search.png")} alt=""/> */}
                                            {/* <img src={require("../../../img/icon/edit.png")} alt=""/> */}
                                            <Invoice isi={isi}/>
                                            <AdminApr isi={isi}/>
                                            <img src={require("../../../img/icon/trash.png")} alt=""/>
                                        </td>
                                    </tr>
                                )
                            }) :null}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        findUser: state.findUser,
        tiketUserR: state.tiketUserR
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        find: (data) =>  dispatch(find(data)),
        tiketUserA: (data) => dispatch(tiketUserA(data))
    }
}
                                
export default connect(mapStateToProps, mapDispatchToProps) (AdminLA);