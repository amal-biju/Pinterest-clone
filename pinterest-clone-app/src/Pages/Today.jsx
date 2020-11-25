import React from 'react'
import { DataContext } from '../Context/DataContextProvider'
import styled from 'styled-components'
import {Link } from 'react-router-dom'

const TodayWrap = styled.div`
box-sizing: border-box;
    width: 68%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
`;
const TodayItems = styled.div`
width: 45%;
height: 300px;
margin: 10px;
text-aligne: center;
font-size: 22px;
color : white;
border-radius: 25px;
& h1{
    color: white
}

`


class Today extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            today : []
        }
    }
    componentDidMount(){
        const {today} = this.context
        this.setState({
            today : today
        })
    }
    render(){
        const {today}=this.state
        
        return(
            <div style ={{textAlign:"center"}}>
                <h1>Today {new Date().toLocaleDateString('en-GB')}</h1>
                <h1>Stay Inspired</h1>
                <TodayWrap >
                
                    {
                    today.map((item)=>(
                        
                        <TodayItems key ={item.id} style = {{backgroundImage:`url(${item.today_img})`,backgroundSize :"cover"}} >
                           <Link to = {`/today/${item.id}`}>{ <h1 style = {{position :"relative"}}>{item.today_title}</h1>}</Link>
                        </TodayItems>
                    ))
                }
                </TodayWrap>
                
            </div>
        )
    }
}
Today.contextType = DataContext
export {Today}