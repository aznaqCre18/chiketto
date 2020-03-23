import React, {Component} from 'react';
import axios from 'axios';
import { Button, Modal, Form, Image } from 'react-bootstrap';
import './login.css';
import './../../Container/homepage/homepage.css';
//import {Link} from 'react-router-dom';
//import MenuUtama from './../../../container/menuUtama/menuUtama';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {login} from './../../_action/LoginA'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password: '',
            emailErr: '',
            passwordErr: '',
            show : false
        }
    }

    // componentDidMount() {
    //     this.handleLogin()
    // }

    handleModal() {
        this.setState(
            { show: !this.state.show }
            );
        }

    emailOnChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordOnChange = (event) => {
        this.setState({
            password: event.target.value
        }, () => this.validatePassword(this.state.password))
    }

    validatePassword = (pass) => {
        if (pass.length >= 4) {
            this.setState({
                passwordErr : ''
            })
        }else if(pass.length === 0) {
            this.setState({
                passwordErr: 'Harap masukan password anda'
            })
        }
        else {
            this.setState({
                passwordErr : 'Masukan setidaknya 4 karakter'
            })
        }
    }

    validateEmail = (mail) => {

        //menggunakan regular expression
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            this.setState({
                emailErr:''
            })
        }else{
            this.setState({
                emailErr: 'Mohon masukan email dengan format yang tepat...'
            })
        }
    }

    

    handleLogin = (event) => {
        event.preventDefault()
        let dataLogin = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value
        };
        this.props.login(dataLogin)
    }
    
    render() {
        const {data, dataError, error, isLogin} = this.props.loginR
        console.log(data)
        if(isLogin === true && data.status === false) {
            window.localStorage.setItem("token", data.token)
            window.location.href = "http://localhost:3000/homepageAL";
        } else if(isLogin === true && data.status === true) {
            window.localStorage.setItem("token", data.token)
            window.location.href = "http://localhost:3000/admin";
        }
        return ( 
        <>

            
            <span onClick={() => {this.handleModal()}} className="login-modal" variant="light">LOGIN</span>
            
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal"
                show={this.state.show}
                onHide={() => this.handleModal()}
            >
                {/* <Modal.Header>
                </Modal.Header> */}
                <Image onClick={() => this.handleModal()} src={require("../../img/icon/close.png")} className="closelog" width="40" height="40"/>
                <h1 className="txtModalHeader">Login</h1>
                <Modal.Body>
                <Form onSubmit={this.handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control type="input" placeholder="Enter Username" onChange={this.emailOnChange} name="username" className="username" autoComplete="off"/>
                    <p>{this.state.emailErr}</p>
                    </Form.Group>   
                    <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={this.passwordOnChange} name="password" className="pass"/>
                    <p>{this.state.passwordErr}</p>
                    {error ? <p style={{color: "red",fontSize: "12px"}}>{dataError.message}</p> : null}
                    </Form.Group>
                    {/* <Link to="/homepageAL">
                    </Link> */}
                        <Button className="btn-block" type="submit">
                        LOGIN
                        </Button>
                    
                </Form>
                </Modal.Body>
            </Modal>
        </>
        );
    }
}

const mapStateToProps = state => {
    // console.log('DATA REDUX',state)
    return {
        loginR: state.loginR
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(login(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
