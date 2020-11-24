import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Login } from '../Login';
import { Signup } from '../Signup';
import { Notifications } from '../Notifications';
import { Inbox } from '../Inbox';
import Profile from '../Profile';

const NavbarWrapper = styled.div`
    padding : 8px;
    font-weight : 500;
    font-size : 16px;
    display: flex;
    align-items : center;
    background-color : white;
    & a {
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        text-decoration : none;
        color : black;
    }
    & a:hover {
        background-color : #eee;
        border-radius : 35px;
    }
    & *{
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-weight : 600;

    }
`;
const Search = styled.input`
    padding : 7px 10px 7px 5px;
    border : none;
    border-radius : 0px 25px 25px 0px;
    border : 4px solid #eee;
    background-color : #eee;
    width : 50%;
    &::placeholder {
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-size : 16px;
    }
    &:focus {
        outline : none;

    }
`;
const Logo = styled.img`
    height : 55px;
    padding : 10px;
    border-radius : 50%;
    border : 2px solid white;
    &:hover {
        background-color : #eee;
    }
`;

const SearchIcon =styled.img`
    height : 15px;
    background-color : #eee;
    opacity : 0.5;
    `;
const SearchIconWrapper = styled.div`
    padding : 10px 0px 10px 15px;
    border : 1px solid #eee;
    background-color : #eee;
    border-radius : 25px 0px 0px 25px;
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
            <Logo src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-svg-vector.svg" alt="Logo"/>
            {
                links.map( link => (
                    <NavLink
                        style={{margin:3,padding:"12px 15px"}}
                        activeStyle={{backgroundColor:'black',color:"white",borderRadius:"35px"}}
                        key={link.to}
                        to={link.to}
                    >
                        {link.title}
                    </NavLink>
                ))
            }
            <SearchIconWrapper>
                <SearchIcon src="https://www.flaticon.com/svg/static/icons/svg/598/598494.svg" alt="Icon" />
            </SearchIconWrapper>
            <Search type="text" placeholder="Search"/>
            <Notifications />
            <Inbox />
            <Login />
            <Signup />
        </NavbarWrapper>
    )
}

export  {Navbar}
