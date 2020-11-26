import React, { Component } from "react"
import { DataContext } from "../Context/DataContextProvider"
import styles from "./masonry.module.css"

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
            return <div>No product found</div>
        }
        return (
            <div style={{ width: "100%", height: "100%", backgroundColor: "#ddd" }}>
                <div style={{ display: "flex", width: "800px", margin: "auto", justifyContent: "space-evenly", alignItems: "center", height: "600px", border: "1px solid black", borderRadius: "10px", backgroundColor: "#fff" }}>
                    <div className={styles.PinImg}><img src={pin.img_url} alt="" srcset="" /></div>
                    <div style={{ width: "350px", height: "480px", color: "black" }}>
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
                        <div style={{maxWidth:"300px"}}>{pin.url}</div>
                        <h1  style={{maxWidth:"300px"}}>{pin.description}</h1>

                        <div>
                            <button style={{width:"100px", backgroundColor:"white",border:"none", borderBottom: "1px solid"}}>Photos</button>
                            <button style={{width:"100px", backgroundColor:"white" ,border:"none", borderBottom: "1px solid", marginLeft:"20px"}}>Comments</button>
                        </div>

                        <div>
                            <div>Tried this Pin?<br/>Add a photo to show how it went</div>
                            <button>Add Photo</button>
                        </div>
                    </div>
                    
                </div>
           
            
        )
    }
}

ViewPin.contextType = DataContext

export { ViewPin }