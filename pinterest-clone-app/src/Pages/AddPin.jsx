import React, { Component } from 'react'
import styled from 'styled-components'
import { DataContext } from '../Context/DataContextProvider'
import { AddImage } from './Image'
import styles from "./masonry.module.css"

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
            <div style={{width:"100%",height:"100%",backgroundColor:"#ddd"}}>
                <div style={{ display: "flex", width: "800px", margin: "auto",justifyContent: "space-evenly", alignItems: "center", height: "600px", border: "1px solid black", borderRadius:"10px",backgroundColor:"#fff" }}>
                    <div><AddImage/></div>
                    <div style={{ width: "350px", height: "480px" }}>
                        <div className={styles.select}>
                            <select >
                            {
                                curruser.saved?.map(pin => (
                                    <option value={pin.title}>{pin.title}</option>
                                ))
                            }
                                <option value="dc">DC</option>
                                <option value="marvel">Marvel</option>
                            </select>
                            <button onClick={this.handleSubmit}>Save</button></div>

                        <input
                            style={{ borderWidth: "0 0 2px", fontSize: "30px", fontWeight: "800", maxWidth: "320px", marginTop: "30px" }}
                            type="text"
                            value={title}
                            name="title"
                            placeholder="Add your Title"
                            onChange={this.handleChange} />
                        <br />
                        <div className={styles.dp}><img src={curruser.dp} alt="" srcset="" />
                            <a> {curruser.name}</a></div>
                        <input
                            style={{ borderWidth: "0 0 2px", marginTop: "30px", maxWidth:"320px" }}
                            size="40"
                            type="text"
                            value={description}
                            name="description"
                            placeholder="Tell everyone what your Pin is about"
                            onChange={this.handleChange} />
                        <br />
                        <input
                            style={{ borderWidth: "0 0 2px", marginTop: "215px",maxWidth:"320px" }}
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