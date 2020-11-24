import React, { Component } from 'react'
import styled from 'styled-components'
import { DataContext } from '../Context/DataContextProvider'

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

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pins : []
        }
    }
    componentDidMount() {
        const { getPins,pins } = this.context;
        this.setState({
            pins : pins
        })
    }
    
    
    render() {
        const { pins } = this.state
        const { isSaved,addSavedPins,savedIds } = this.context
        console.log(addSavedPins);
        console.log(savedIds);
        return (
            <Wrapper>
                {
                    pins.map( pin => (
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
        )
    }
}
Home.contextType = DataContext

export  {Home}
