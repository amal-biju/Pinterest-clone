import React, { Component } from 'react'
import styled from 'styled-components'
import { DataContext } from '../Context/DataContextProvider'

const Wrapper = styled.div`
    box-sizing: border-box;
    max-width: 79%;
    height: 700px;
    display: flex;
    flex-flow: column wrap;
`;

const ImageCard = styled.div`
    width : 18%;
    margin : 10px;

`;

const Image = styled.img`
    width: 100%;
    height : 300px;
    background-size : cover;
    border-radius  :20px;
`;

class DashBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pins: []
        }
    }



    render() {
        const { curruser,savedPins } = this.context
        console.log(curruser)
        return (
            <div style={{ width: "100%", textAlign: "center", marginTop: "60px" }}>
                <img src="https://i.imgur.com/D5wcicT.jpg" alt="photo"width="120px" height="120px" style={{ borderRadius: "60px" }} />
                <h3 style={{fontWeight:"bold",marginTop:"10px"}}>{curruser.name}</h3>
                <div>{curruser.email}</div>
                <div>{curruser.following.length} following • {curruser.followers.length} followers</div>
                <h1 style={{marginTop:"40px",color:"darkred"}}>Saved Pins</h1>
                {/* <div style={{width:"100%", marginTop:"100px", display:"flex", justifyContent:"space-evenly"}}> 
                    <div>
                        <div style={{width:"230px", height:"150px", border:"1px solid black", borderRadius:"20px"}}>LOVE</div>
                        <br/>
                        <div>All Pins</div>
                    </div>
                    {
                        curruser.saved_pins.map( pin => (
                            <div  key={pin.id} >
                                <div style={{width:"230px", height:"150px", border:"1px solid black", borderRadius:"20px"}}>LOVE</div><br/>
                                <div>{pin.title}</div>
                            </div>
                        ))
                    }
                </div> */}
                <div style={{display:"flex",justifyContent:"flex-start",flexWrap:"wrap",flexDirection:"row"}}>
                    {
                        savedPins?.map( pin => (
                            <ImageCard>
                                <Image src={pin.img_url} alt="pin"/>
                                <h3 style={{margin:"10px"}}>Photo by {pin.author}</h3>
                            </ImageCard>
                        ))
                    }
                </div>
            </div>
        )
    }
}

DashBoard.contextType = DataContext

export { DashBoard }