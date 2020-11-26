import React from 'react'
import { DataContext } from '../Context/DataContextProvider'
import styled from 'styled-components'
import Item from 'antd/lib/list/Item';

const Todaytop = styled.div`
width: 100%
height: 400px
`;
const TodayMain = styled.div`
    box-sizing: border-box;
    width: 60%;
    height: 400px;
    margin: auto;
    text-aligne: center;
    font-size: 22px;
    color : white;
    border-radius: 25px;
    & h1{
        color: white
    }
`;
const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 1200px;
    display: flex;
    flex-flow: column wrap;
`;

const ImageCard = styled.div`
    width : 18%;
    margin : 10px;
    &:hover {
        & > div{
            visibility : visible;
        }
    }
`;
    
const Image = styled.img`
    width: 100%;
    background-size : cover;
    border-radius  :20px;
    &:hover {
        cursor : zoom-in;
    }
`;
const OnHover = styled.div`
    position : absolute;
    visibility : hidden;
`;
const OnHoverContents = styled.div`
    position : relative;
    top : 20px;
    left : 16px;
`;
const Whitebox = styled.div`
    display : inline;
    padding : 13px 50px;
    background-color : #ffffffb9;
    border-radius : 10px 0px 0px 10px;
    &:hover{
        background-color : #fff;
    }
`;
const SaveBtn = styled.button`
    padding : 10px;
    color : white;
    background-color : #ed0000b9;
    border : none;
    border-radius : 0px 10px 10px 0px;
    &:hover{
        background-color : #ed0000;
    }
`;

const SpanContainer = styled.div`
    position : absolute;
    top : 550%;
    left : 110px;
`;

const Span = styled.span`
    background-color : #ffffffb9;
    padding : 10px;
    margin : 5px;
    border-radius : 50%;
    &:hover{
        background-color : #fff;
    }
`;


class TodayItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todayItem :"" ,
            subitem : []
        }
    }
   componentDidMount(){
        const {todayItem,subitem} = this.state
        
        console.log(this.props.match.params)

        const { getTodayById ,getRandom} = this.context
        const { today_id } = this.props.match.params

        this.setState({
            todayItem : getTodayById(today_id),
            subitem : getRandom()
        })
       
   }
    render(){
        const { todayItem,subitem } = this.state
        const { isSaved,addSavedPins,savedIds } = this.context
        return(
            <div>
            <Todaytop>
                <TodayMain style = {{backgroundImage:`url(${todayItem.today_img})`,backgroundSize :"cover",padding:"20px",marginTop:"20px"}}>
                    <h1 style = {{textAlign:"center"}}>{todayItem.today_title}</h1>
                    <div style = {{margin:"auto",color:"black",textAlign:"center"}}>
                        <button style={{width:"100px",height:"50px",border:"none",borderRadius:"30px"}}>Share</button>
                    </div>
                </TodayMain>
                    <div style ={{margin: "20px auto",textAlign:"center"}}>
                        <h1>{todayItem.today_title}</h1>
                        <div>18, aug 2020</div>
                    </div>
            </Todaytop>
            <div style ={{margin: "auto",textAlign:"center"}}><h1>More Like this</h1></div>
            

            <Wrapper>
                {
                    subitem.map( pin => (
                        <ImageCard key={pin.id}>
                            <OnHover>
                                <OnHoverContents>
                                    
                                    {
                                        savedIds.indexOf(pin.id) == -1 ? ( 
                                            <>
                                                <Whitebox>Fashion</Whitebox>
                                                <SaveBtn onClick={() => addSavedPins(pin.id)}>Save</SaveBtn> 
                                            </>
                                        ) : ( 
                                            <>
                                                <Whitebox style={{visibility:"hidden"}}>Fashion</Whitebox>
                                                <SaveBtn style={{visibility:"visible",borderRadius:"10px"}} disabled="true">Saved</SaveBtn> 
                                            </>
                                         ) 
                                    }
                                    <SpanContainer>
                                        <Span><img src="https://www.flaticon.com/svg/static/icons/svg/725/725008.svg" alt="Upload" height="16px" width="16px"/></Span>
                                        <Span><img src="https://www.flaticon.com/svg/static/icons/svg/512/512222.svg" alt="More" height="16px" width="16px"/></Span>
                                    </SpanContainer>
                                </OnHoverContents>
                            </OnHover>
                            <Image src={pin.img_url}/>
                        </ImageCard>
                    ))
                }
            </Wrapper>

            </div>
        )
    }
}

TodayItem.contextType = DataContext

export { TodayItem } 