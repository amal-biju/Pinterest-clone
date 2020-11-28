import React from 'react'
import { DataContext } from '../Context/DataContextProvider'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TodayWrap = styled.div`
    box-sizing: border-box;
    width: 68%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
`;
const TodayItem = styled.div`
    width: 45%;
    height: 300px;
    margin: 10px;
    text-aligne: center;
    font-size: 22px;
    color : white;
    border-radius: 25px;
    & h2{
        padding : 15px;
        color: white;
        font-weight : 600;
    }
`;


class Today extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            today : []
        }
    }
    componentDidMount(){
        const { today } = this.context
        this.setState({
            today : today
        })
    }
    render(){
        const { today } = this.state
        
        return(
            <div style ={{textAlign:"center",marginTop:"30px"}}>
                <h2 style={{fontWeight:"bold"}}>November 26, 2020</h2>
                <p style={{fontSize:"45px",fontWeight:"bold",marginTop:"-20px"}}>Stay Inspired</p>
                <TodayWrap >
                
                    {
                    today.map((item)=>(
                        
                        <TodayItem key ={item.id} style = {{backgroundImage:`url(${item.today_img})`,backgroundSize :"cover"}} >
                           <Link to = {`/today/${item.id}`}>{ <h2 style = {{position :"relative"}}>{item.today_title}</h2>}</Link>
                        </TodayItem>
                    ))
                }
                </TodayWrap>
                <div style={{marginTop:"40px"}}>That's all for today!</div>
                <h3 style={{fontWeight:"bolder",fontSize:"20px",marginBottom:"40px"}}>Come back tomorrow for <br/> more inspiration</h3>
            </div>
        )
    }
}

Today.contextType = DataContext

export { Today }