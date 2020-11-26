import React, { Component } from "react"
import { DataContext } from "../Context/DataContextProvider"
import styles from "./ViewPin.module.css"
import styled from 'styled-components';

const GreyBtn = styled.button`
    padding : 15px;
    border : none;
    width : 150px;
    margin-right : 10px;
    border-radius : 30px;
    &:hover {
        background-color : #ddd;
        cursor : pointer;
    }
    &:focus {
        outline : none;
    }
`;
const RedBtn = styled.button`
    padding : 15px;
    border : none;
    width : 150px;
    color : white;
    background-color : #ed0000;
    border-radius : 30px;
    &:hover {
        cursor : pointer;
    }
    &:focus {
        outline : none;
    }
`;
const Details = styled.div`
    padding : 20px;
    & > div {
        margin-bottom : 30px;
    }
`;

class ViewPin extends Component {
    constructor(props) {
        console.log(props)
        super(props)
        console.log(props)
        this.state = {
            pin: ""
        }
    }

    componentDidMount() {
        this.setState((prev) => {
            return {
                loading: false
            }
        })
        const { getPinById } = this.context
        const { id } = this.props.match.params

        console.log(this.props)
        this.setState({
            pin: getPinById(id),
            loading: false
        })
    }

    render() {
        const { pin } = this.state
        const {curruser}=this.context
        console.log(pin)
        if (!pin) {
            return <h1 style={{textAlign:"center"}}>No product found</h1>
        }
        return (
            <div style={{ width: "100%", height: "100%", backgroundColor: "white",padding:"10px" }}>
                <div style={{ display: "flex", width: "800px", margin: "auto", boxShadow:"0px 2px 6px #bbb",justifyContent: "space-evenly", alignItems: "center", minHeight: "600px",maxHeight:"max-content", border: "none", borderRadius: "10px", backgroundColor: "#fff",overflow:"hidden" }}>
                    <div>
                        <img src={pin.img_url} alt="" srcset="" height="100%" width="400px" />
                    </div>
                    <Details>
                        <div>
                            <RedBtn onClick={this.handleSubmit}>Save</RedBtn>
                        </div>
                        <div>
                            <h2>Photo by {pin.author}</h2>
                            <div style={{maxWidth:"300px",color:"#aaa"}}>{pin.url}</div>
                            <h1  style={{maxWidth:"300px"}}>{pin.description}</h1>
                        </div>
                        <div>
                            <button style={{width:"100px", backgroundColor:"white",border:"none", borderBottom: "2px solid"}}>Photos</button>
                            <button style={{width:"100px", backgroundColor:"white" ,border:"none", marginLeft:"20px",color:"grey"}}>Comments</button>
                        </div>
                        <div>
                            <div style={{margin:"10px"}}>Tried this Pin?<br/>Add a photo to show how it went</div>
                            <GreyBtn>Add Photo</GreyBtn>
                            <GreyBtn>Follow</GreyBtn>
                        </div>
                    </Details>
                </div>
                    
            </div>
           
            
        )
    }
}

ViewPin.contextType = DataContext

export { ViewPin }