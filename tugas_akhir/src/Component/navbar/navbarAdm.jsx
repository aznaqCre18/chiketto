import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import './../../Container/homepage/homepage.css'
import {login} from '../../_action/LoginA'
import {find} from '../../_action/getUserA';

class TiketSaya extends Component {

    handleShow = () => {
        const childdrop = document.querySelector('.childdrop');
        childdrop.classList.toggle('childdrop1')
    }

    handleLogout () {
        window.localStorage.removeItem('token')
        window.location.href = "http://localhost:3000/"
    }

    render() {
        const {dataLu} = this.props.findUser
        console.log("LIAATLAG",dataLu);
        
        return(
            <>
                <div className="navbar">
                    <Link to="/admin">
                        <h1 className="title">Chiketto</h1>
                    </Link>
                    <span className="userName">{dataLu.find.username}</span>
                    
                    <div className="dropdown">
                        <img onClick={this.handleShow} src={require("../../img/icon/profile.png")} className="profile" alt=""/>
                        <div className="childdrop">
                            <Link to="/add_tiket">
                                <div className="drop">
                                    <p>Tambah Tiket</p>
                                </div>
                            </Link>
                                <hr/>
                            {/* <Link to="/">
                            </Link> */}
                                <div onClick={this.handleLogout} className="drop">
                                    <p>Logout</p>
                                </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        findUser : state.findUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        find : data => dispatch(find(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TiketSaya);