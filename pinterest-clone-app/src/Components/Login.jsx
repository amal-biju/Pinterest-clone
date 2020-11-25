import React, { Component } from "react"
import { DataContext } from "../Context/DataContextProvider"
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components'

const LoginBtn = styled.div`
    padding : 7px 10px;
    margin-left : 10px;
    border-radius : 30px;
    color : white;
    background-color : red;
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
        
        padding:5px 10px;
        font-size:20px;
        border-radius:25px;
        margin-bottom:10px;
        margin-top:10px;        
    }
    & input:focus {
        outline : none;
    }
    
`;

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            visible:false,
            error:false
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
        const { email, password } = this.state
        const { handleLogin,isAuth} = this.context
        console.log(isAuth)
        var auth=handleLogin(email, password);
        if(auth){
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
        const { email, password ,visible} = this.state
        const { isAuth, isLoading, token, error } = this.context
        return (
            <div>
                <LoginBtn
                onClick={this.showModal}>Log in</LoginBtn>
            <Modal
                title={null}
                visible={visible}
                footer={null}
                onCancel={this.handleCancel}
                bodyStyle={{padding:"10px", margin:"auto",borderRadius:"100px !important",height:"max-content",textAlign:"center"}}
                style={{top:20,margin:"auto",borderRadius:"100px !important"}}
                borderRadius="200px !important" 
                
            >
                <img src="./icon.png" alt="LOGO" width="35px" />
                 <Form onSubmit={this.handleSubmit}>
                     
                     <h1>Welcome to Pinterest</h1>
                            <input
                                type="text"
                                value={email}
                                name="email"
                                placeholder="email"
                                onChange={this.handleChange} />
                            <br />
                            <div>{error==101? "User does not Exist":""}</div>
                            <br />
                            <input
                                type="text"
                                value={password}
                                name="password"
                                placeholder="password"
                                onChange={this.handleChange} />
                                <br />
                                <div>{error==202? "Incorrect Password":""}</div>
                                <br />
                                <div>Forgot Your password?</div> 
                                <br/>
                            <input style={{backgroundColor:"red",fontWeight:"600", color:"white",marginTop:"30px"}} type="submit" value="Log In" /><br/>
                            <div>Or</div>
                            <input style={{backgroundColor:"blue",fontWeight:"600", color:"white"}} type="submit" value="Continue with Facebook" /><br/>
                            <input style={{backgroundColor:"grey",fontWeight:"600", color:"white",marginBottom:"30px"}} type="submit" value="Continue with Google" /><br/>
                            <div>By continuing, you agree to Pinterest's Terms of Service, Privacy Policy.</div><br/><hr/>
                            <div>Not on Pinterest yet? Sign-up</div>
                        {error && "something went wrong"}
                        </Form>
            </Modal>
            </div>
        )
    }
}

Login.contextType = DataContext