import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavbarWrapper = styled.div`
    padding : 10px;
    font-weight : 500;
    font-size : 16px;
    display: flex;
    align-items : center;
    background-color : white;
    & a {
        text-decoration : none;
        color : black;
    }
    & a:hover {
        background-color : #eee;
        border-radius : 35px;
    }
`;
const Search = styled.input`
    padding : 11px;
    border : none;
    border-radius : 35px;
    border : 4px solid #ced4da;
    background-color : #ced4da;
    width : 55%;
    &::placeholder {
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-size : 16px;
    }
    &:focus {
        border : 4px solid #c6def1;
        outline : none;

    }
`;
const Logo = styled.img`
    height : 30px;
    padding : 10px;
    border-radius : 50%;
    border : 2px solid white;
    &:hover {
        background-color : #eee;
    }
`;
const Icon = styled.img`
    padding : 10px;
    height : 30px;
    opacity : 0.6;
    margin-left : 5px;
    border-radius : 50%;
    &:hover{
        background-color : #eee;
        cursor : pointer;
    }
`;

const links = [
    {
        to : "/",
        title : "Home"
    },
    {
        to : "/today",
        title : "Today"
    },
    {
        to : "/following",
        title : "Following"
    }
]


const Navbar = () => {
    return (
        <NavbarWrapper>
            <Logo src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c52e.png" alt="Logo"/>
            {
                links.map( link => (
                    <NavLink
                        style={{margin:3,padding:15}}
                        activeStyle={{backgroundColor:'black',color:"white",borderRadius:"35px"}}
                        key={link.to}
                        to={link.to}
                    >
                        {link.title}
                    </NavLink>
                ))
            }
            <Search type="text" name="" id="" placeholder="Search"/>
            <div><Icon src="https://www.flaticon.com/svg/static/icons/svg/633/633816.svg" alt="Notifications"/></div>
            <div><Icon src="https://www.flaticon.com/svg/static/icons/svg/684/684849.svg" alt="Chat"/></div>
        </NavbarWrapper>
    )
}

export  {Navbar}
