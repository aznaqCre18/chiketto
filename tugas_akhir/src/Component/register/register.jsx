import  React, {Component} from 'react';
import {Modal, Button, Form, Image} from 'react-bootstrap';
import './register.css';
import './../../Container/homepage/homepage.css'
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {register} from '../../_action/registerA' 

class Register extends Component {  

        constructor(props){
            super(props)
                this.state = {
                    show: false,
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    gender: '',
                    phone: '',
                    address: ''
                }
            }
            
        handleRegister = (e) => {
            e.preventDefault();
            const data = {
                name: this.state.name,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                gender: this.state.gender,
                phone: this.state.phone,
                address: this.state.address
            }
            console.log(data)
            this.props.register(data)
        }

        // handleChange = e => {
        //     this.setState({
        //         [e.target.name]: e.target.value
        //     })
        // }

        handleShow = () => {
            this.setState({
                show: !this.state.show
            })
        }

        // onClick={data.token != null ? <Redirect to="/menuUtama" /> : null }
        // handleClick = () => {
        //     this.setState({
        //         isLogin : true
        //     })
            
        //     this.state.isLogin == true && data.token != null ? <Redirect to="/menuUtama" /> : null 
        //     if(this.state.isLogin == true ) {
        //         <Redirect to="/menuUtama" />
        //     }
        
        


    render(){
        
        //const {data, isLoading, error } = this.props.spesiesR
        const {isLogin} = this.props.registerR
        //console.log("sadasd ", data.data)  

        // const token = localStorage.getItem('token')
                return (
                <>
                    <span variant="light" className="register-modal" onClick={this.handleShow}>DAFTAR</span>
                    
                    <Modal show={this.state.show} onHide={this.handleShow} size="md">
                        <Modal.Body>
                        <Image onClick={this.handleShow} src={require("../../img/icon/close.png")} className="close" />
                            {isLogin ? <Redirect to="/homepageAL" /> : null }
                            
                            <h1 className="judul">REGISTER</h1>
                        <Form action="" onSubmit={this.handleRegister} className="form-register">
                            <input type="text" className="breeder" placeholder="Full Name" name="name" onChange={e => this.setState({name: e.target.value})}/>
                            <br/>
                            <input type="text" className="email1" placeholder="Username" name="username" onChange={e => this.setState({username: e.target.value})}/>
                            <br/>
                            <input type="text" className="password" placeholder="Email" name="email" onChange={e => this.setState({email: e.target.value})}/>
                            <br/>
                            <input type="password" className="number" placeholder="Password" name="password" onChange={e => this.setState({password: e.target.value})}/>
                            <br/>
                            <select className="number" name="gender" onChange={e => this.setState({gender: e.target.value})}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <br/>
                            <input type="text" className="number" placeholder="No. Handphone" name="phone" onChange={e => this.setState({phone: e.target.value})}/>
                            <br/>
                            <textarea className="text-area-address" placeholder="Input Your Address Here" name="address" onChange={e => this.setState({address: e.target.value})}></textarea>
                            {/* <Link to="/homepageAL">
                            </Link> */}
                                <Button type="submit" variant="danger" className="tombolRegister">REGISTER</Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </>
            );
        }
    }


const mapStateToProps = state => {
    return {
        registerR: state.registerR
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: data => dispatch(register(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

// export default Register;