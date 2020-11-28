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
    
    margin-top : 20px;
    text-align: center;
    border-radius : 30px;
    align-items: center;
    width:100%;
    
`;

const Input = styled.input`
    width : 300px;
    border : 1px solid #ddd;
    border-radius : 10px;
    padding : 10px;
    margin-bottom : 5px;
    &:focus{
        outline : none;
    }
    &::placeholder{
        font-weight : 400;
        font-size : 15px;
    }
`;
const InputBtn = styled.input`
    border-radius : 25px;
    width : 300px;
    border : 1px solid #ddd;
    padding : 10px;
    margin-bottom : 5px;
    opacity : 0.95;
    &:hover{
        cursor : pointer;
        opacity : 1;
    }
    &:focus{
        outline : none;
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
                bodyStyle={{padding:"15px 0px 0px 0px", margin:"auto",height:"max-content",textAlign:"center"}}
                style={{top:5,margin:"auto"}}
            >
                <img src="./icon.png" alt="LOGO" srcset="" width="35px" />
                     <h1 style={{fontWeight:"bolder"}}>Welcome to Pinterest</h1>
                     <h4>Find new ideas to try</h4>
                 <Form onSubmit={this.handleSubmit}>
                     
                            <Input
                                type="email"
                                value={email}
                                name="email"
                                placeholder="Email Address"
                                onChange={this.handleChange} 
                                required/>
                            <br />
                            <Input
                                type="text"
                                value={password}
                                name="password"
                                placeholder="Create a password"
                                onChange={this.handleChange} 
                                required/>
                                <br/>
                                <Input
                                type="number"
                                value={age}
                                name="age"
                                placeholder="Age"
                                onChange={this.handleChange} 
                                required/>
                                <div>{error==303? "User Already Exist":""}</div>
                            <InputBtn style={{backgroundColor:"red",fontWeight:"600", color:"white",marginTop:"30px"}} type="submit" value="Signup" /><br/>
                            <div>Or</div>
                            <InputBtn style={{backgroundColor:"blue",fontWeight:"600", color:"white"}} type="submit" value="Continue with Facebook" /><br/>
                            <InputBtn style={{backgroundColor:"#eee",fontWeight:"600", color:"black",marginBottom:"30px"}} type="submit" value="Continue with Google" /><br/>
                            <div>By continuing, you agree to Pinterest's Terms of Service, Privacy Policy.</div><br/>
                            <div>Already a Member? Log in</div><br/>
                            <div style={{fontWeight:500,backgroundColor:"#ddd",padding:"15px",fontSize:"16px"}}>Create a Business Account</div>
                        {error && "something went wrong"}
                        </Form>
            </Modal>
            </div>
        )
    }
}

Signup.contextType = DataContext