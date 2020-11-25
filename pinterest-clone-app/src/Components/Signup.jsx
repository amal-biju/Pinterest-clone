import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { DataContext } from "../Context/DataContextProvider"
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components'

const SignupBtn = styled.div`
    padding : 7px 10px;
    margin-left : 10px;
    border-radius : 30px;
    background-color : #eee;
    &:hover {
        cursor : pointer;
    }
`;

const Form = styled.form`
    
    text-align: center;
    border-radius : 30px;
    align-items: center;
    width:100%;
 
    & input {
        width:300px;
        
        padding:5px;
        font-size:20px;
        border-radius:25px;
        margin-bottom:10px;
        margin-top:10px;        
    }
    
`;

export class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            age:"",
            visible:false
        }
    }

    showModal = () => {
        this.setState({
            visible:true
        });
    };


    handleCancel = () => {
        this.setState({
            visible:false
        });
    };

    handleSubmit = e => {
        e.preventDefault()
        const { email, password,age } = this.state
        const { handleSignup } = this.context
        console.log(email,password,age)
        var stat=handleSignup(email, password,age);
        
        if(stat){
        setTimeout(() => {
                this.setState({
                    visible:false
                });
            }, 2000);
        }
    };

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        },()=>console.log(this.state))
    }

   

    render() {
        const { email, password ,visible,age} = this.state
        const { isAuth, isLoading, token, error } = this.context
        return (
            <div>
                <SignupBtn
                onClick={this.showModal}>Sign up</SignupBtn>
            <Modal
                title={null}
                visible={visible}
                footer={null}
                onCancel={this.handleCancel}
                bodyStyle={{padding:"10px", margin:"auto",borderRadius:"600px",height:"720px",textAlign:"center"}}
                style={{top:5,margin:"auto",borderRadius:"100px"}}
                borderRadius="200px"
                
            >
                <img src="./icon.png" alt="LOGO" srcset="" width="35px" />
                 <Form onSubmit={this.handleSubmit}>
                     
                     <h1>Welcome to Pinterest</h1>
                     <h4>Find new ideas to try</h4>
                            <input
                                type="email"
                                value={email}
                                name="email"
                                placeholder="Email Address"
                                onChange={this.handleChange} />
                            <br />
                            <input
                                type="text"
                                value={password}
                                name="password"
                                placeholder="Create a password"
                                onChange={this.handleChange} />
                                <br/>
                                <input
                                type="number"
                                value={age}
                                name="age"
                                placeholder="Age"
                                onChange={this.handleChange} />
                                <br/><div>{error==303? "User Already Exist":""}</div><br />
                            <input style={{backgroundColor:"red",fontWeight:"600", color:"white",marginTop:"30px"}} type="submit" value="Log In" /><br/>
                            <div>Or</div>
                            <input style={{backgroundColor:"blue",fontWeight:"600", color:"white"}} type="submit" value="Continue with Facebook" /><br/>
                            <input style={{backgroundColor:"grey",fontWeight:"600", color:"white",marginBottom:"30px"}} type="submit" value="Continue with Google" /><br/>
                            <div>By continuing, you agree to Pinterest's Terms of Service, Privacy Policy.</div><br/>
                            <div>Already a Member? Log in</div><br/><hr/>
                            <div style={{fontWeight:500}}>Create a Business Account</div>
                        {error && "something went wrong"}
                        </Form>
            </Modal>
            </div>
        )
    }
}

Signup.contextType = DataContext