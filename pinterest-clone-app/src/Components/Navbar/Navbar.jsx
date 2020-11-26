import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Signup } from '../Signup';
import { Notifications } from '../Notifications';
import { Inbox } from '../Inbox';
import { Login } from '../Login';
import { DataContext } from '../../Context/DataContextProvider';

const NavbarWrapper = styled.div`
    padding : 5px;
    height:10%;
    width:100%
    position: sticky;
    top : 0px;
    z-index : 1;
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

const SearchIcon = styled.img`
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
const ProfileLink = styled.div`
    text-align : center;
    background-color : #eee;
    padding : 6px 12px;
    border-radius : 50%;
    margin-left : 5px;
    &:hover {
        cursor : pointer;
        background-color : #ddd;
    }
`;
const Cross = styled.div`
    background-color : white;
    width:50px;
    height:50px;
    text-align: center;
    border-radius : 50%;
    font-size : 30px;
    font-weight : 500;
    position : fixed;
    bottom : 90px;
    right : 30px;
    box-shadow : 0px 1px 3px grey;
`;
const Question = styled.div`
    background-color : white;
    padding : 0px 17px;
    border-radius : 50%;
    width : max-content;
    font-size : 30px;
    font-weight : 500;
    position : fixed;
    bottom : 30px;
    right : 30px;
    box-shadow : 0px 1px 3px grey;
`;

const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/today",
        title: "Today"
    },
    {
        to: "/following",
        title: "Following"
    }
]


class Navbar extends Component {
    handleClick = () => {
        const { history } = this.props;
        history.replace('/dashboard')
    }

    render() {
        const { isAuth } = this.context;
        const mystyle = {
            backgroundColor: "white",
            width: "50px",
            height: "50px",
            textAlign: "center",
            borderRadius: "50%",
            fontSize: "30px",
            fontWeight: "500",
            position: "fixed",
            bottom: "90px",
            right: "30px",
            boxShadow: "0px 1px 3px grey"
        }
        const myactivestyle={
            backgroundColor: "red",
            color:"white"            
        }
        return (
            <>
                <NavbarWrapper>
                    <Logo src="./icon.png" alt="Logo" />
                    {
                        links.map(link => (
                            <NavLink
                                style={{ margin: 3, padding: "12px 15px" }}
                                activeStyle={{ backgroundColor: 'black', color: "white", borderRadius: "35px" }}
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
                    {
                        isAuth ? (
                            <Search type="text" placeholder="Search" style={{ width: "60%" }} />
                        ) : (
                                <Search type="text" placeholder="Search" />
                            )
                    }
                    <Notifications />
                    <Inbox />
                    {
                        isAuth ? (
                            // <ProfileLink onClick={this.handleClick}>A</ProfileLink>
                            <Link to="/dashboard" style={{
                                margin: 10,
                                padding: 10
                            }}>CD</Link>
                        ) : (
                                <>
                                    <Login />
                                    <Signup />
                                </>
                            )
                    }

                </NavbarWrapper>
                <Link
                    style={mystyle}
                    activeStyle={myactivestyle}
                    to="./pinbuilder">+</Link>
                <Question>?</Question>
            </>
        )
    }
}

Navbar.contextType = DataContext

export { Navbar }


