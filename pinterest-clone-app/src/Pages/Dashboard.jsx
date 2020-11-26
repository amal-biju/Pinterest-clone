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
    width: 9%;
    background-size : cover;
    border-radius  :20px;
    &:hover {
        cursor : zoom-in;
    }
`;

class DashBoard extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        const { curruser } = this.context
        console.log(curruser)
        return (
            <div style={{ width: "100%", textAlign: "center", marginTop: "60px" }}>
                <img src="https://i.imgur.com/D5wcicT.jpg" alt="" srcset="" width="120px" height="120px" style={{ borderRadius: "60px" }} />
                <div>{curruser.name}</div>
                <div>{curruser.email}</div>
                <div>{curruser.following.length}following•{curruser.followers.length}followers</div>
                <div style={{width:"100%", marginTop:"100px", display:"flex", justifyContent:"space-evenly"}}> 
                <div>
                        <div style={{width:"230px", height:"150px", border:"1px solid black", borderRadius:"20px"}}>LOVE</div><br/>
                           <div>All Pins</div>
                        </div>
                {
                    curruser.saved.map( pin => (<div>
                        <div key={pin.title} style={{width:"230px", height:"150px", border:"1px solid black", borderRadius:"20px"}}>LOVE</div><br/>
                           <div>{pin.title}</div>
                        </div>
                    ))
                }</div>
            </div>
        )
    }
}

DashBoard.contextType = DataContext

export { DashBoard }