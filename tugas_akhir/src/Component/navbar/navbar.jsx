import React, {Component} from 'react';
import './../../Container/homepage/homepage.css'
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {find} from '../../_action/getUserA';

class TiketSaya extends Component {

    // componentDidMount() {
    //     this.handleRefresh()    
    // }
    // handleRefresh = () => {
    //     return (
    //         window.location.reload(true)
    //     )
    // }

    handleLogout = () => {
        return (
            window.localStorage.removeItem('token')
        )
    }


    

    render() {
        //const token = localStorage.getItem('token')
        const {dataLu} = this.props.findUser
        return(
            <>
            
                <div className="navbar">
                    <Link to="/homepageAL">
                        <h1 className="title">Chiketto</h1>
                    </Link>
                    
                    {dataLu.length !== 0 ? 
                    // {dataLu.find.username}
                    <span className="userName">{dataLu.find.username}</span>
                    // dataLu.map((isi, index) => {
                    //     return(
                    //        
                    //     )
                    // }
                    // )
                :null}
                    <div className="dropdown">
                        <img src={require("../../img/icon/profile.png")} className="profile" alt=""/>
                        <div className="childdrop">
                            <Link to="/tiketSaya">
                                <div className="drop">
                                    <p>Tiket Saya</p>
                                </div>
                            </Link>
                            <Link to="/payment">
                                <div className="drop">
                                    <p>Payment</p>
                                </div>
                            </Link>
                                <hr/>
                            <Link to="/">
                                <div className="drop" onClick={this.handleLogout}>
                                    <p>Logout</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    // console.log('DATA REDUX',state)
    return {
        findUser: state.findUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        find: (data) => dispatch(find(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TiketSaya);