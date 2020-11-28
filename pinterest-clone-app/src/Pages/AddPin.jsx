import React, { Component } from 'react'
import styled from 'styled-components'
import { DataContext } from '../Context/DataContextProvider'
import { AddImage } from './Image'
import styles from "./masonry.module.css"

const Input = styled.input`
    &:focus{
        outline : none;
        border-bottom : 2px solid blue;
    }
`;
const SaveBtn = styled.button`
    padding : 10px;
    color : white;
    background-color : #ed0000;
    border : none;
    border-radius : 0px 10px 10px 0px;
    &:hover{
        cursor : pointer;
    }
`;
const WhiteDrop = styled.select`
    padding : 12px 10px;
    background-color : #eee;
    border : none;
    border-radius : 10px 0px 0px 10px;
    &:focus{
        outline : none;
    }
`;


class AddPin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            link: ""
            
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, () => console.log(this.state))
    }

    handleSubmit = () => {
       
        const { title,description,link } = this.state
        const { addpin } = this.context
        var img="https://picsum.photos/400/600"
        addpin(title,description,link,img);
    };

    render() {
        const { title, description, link } = this.state
        const { curruser } = this.context;
        console.log(curruser);
        return (
            <div style={{width:"100%",height:"100%",backgroundColor:"#eee",padding:"20px"}}>
                <div style={{ display: "flex", width: "800px",padding:"20px", margin: "auto",justifyContent: "space-evenly", alignItems: "center", height: "600px", border: "none", borderRadius:"10px",backgroundColor:"#fff" }}>
                    <div style={{backgroundColor:"#eee",padding:"10px",borderRadius:"10px"}}><AddImage/></div>
                    <div style={{ width: "350px", height: "480px" }}>
                        <div className={styles.select} style={{marginLeft:"160px"}}>
                            <WhiteDrop >
                                <option value="">Category</option>
                            {
                                curruser.saved?.map(pin => (
                                    <option value={pin.title}>{pin.title}</option>
                                ))
                            }
                                <option value="sports">Sports</option>
                                <option value="dc">DC</option>
                                <option value="marvel">Marvel</option>
                                <option value="fashion">Fashion</option>
                                <option value="modelling">Modelling</option>
                            </WhiteDrop>
                            <SaveBtn onClick={this.handleSubmit}>Save</SaveBtn>
                        </div>

                        <Input
                            style={{ borderWidth: "0 0 2px", fontSize: "30px", fontWeight: "800", maxWidth: "320px", marginTop: "30px",marginBottom:"10px" }}
                            type="text"
                            value={title}
                            name="title"
                            placeholder="Add your Title"
                            onChange={this.handleChange} />
                        <br />
                        <div className={styles.dp}><img src={curruser.dp} alt=""/>
                            <a > {curruser.name} </a></div>
                        <Input
                            style={{ borderWidth: "0 0 2px", marginTop: "30px", maxWidth:"320px",padding:"5px 0px" }}
                            size="40"
                            type="text"
                            value={description}
                            name="description"
                            placeholder="Tell everyone what your Pin is about"
                            onChange={this.handleChange} />
                        <br />
                        <Input
                            style={{ borderWidth: "0 0 2px", marginTop: "215px",maxWidth:"320px",padding:"5px 0px" }}
                            size="40"
                            type="link"
                            value={link}
                            name="link"
                            placeholder="Add a Destination Link"
                            onChange={this.handleChange} />

                    </div>
                </div>
            </div>
        )
    }
}

AddPin.contextType = DataContext

export { AddPin }