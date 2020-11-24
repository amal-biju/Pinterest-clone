import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { Drawer } from 'antd';

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
    height : 70px;
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


const Navbar = () => {

    const [visible1, setVisible1] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
    const [visible3, setVisible3] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const showModal1 = () => {
        setVisible1(true);
    };


    const handleCancel1 = () => {
        console.log('Clicked cancel button');
        setVisible1(false);
    };
    const showModal2 = () => {
        setVisible2(true);
    };


    const handleCancel2 = () => {
        console.log('Clicked cancel button');
        setVisible2(false);
    };

    const handleLogin1 = () => {
        var a = 1
        if (a == 1) {
            setModalText('The modal will be closed after two seconds');
            setConfirmLoading(true);
            setTimeout(() => {
                setVisible1(false);
                setConfirmLoading(false);
            }, 2000);
        }
    };

    const handleLogin2 = () => {
        var a = 1
        if (a == 1) {
            setModalText('The modal will be closed after two seconds');
            setConfirmLoading(true);
            setTimeout(() => {
                setVisible2(false);
                setConfirmLoading(false);
            }, 2000);
        }
    };

    const showDrawer = () => {
        setVisible3(true);
    };

    const onClose = () => {
        setVisible3(false);
    };


    return (
        <NavbarWrapper>
            <Logo src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c52e.png" alt="Logo" width="70px" />
            {
                links.map(link => (
                    <NavLink
                        style={{ margin: 3, padding: 15 }}
                        activeStyle={{ backgroundColor: 'black', color: "white", borderRadius: "35px" }}
                        key={link.to}
                        to={link.to}
                    >
                        {link.title}
                    </NavLink>
                ))
            }
            <Search type="text" name="" id="" placeholder="Search" />
            <div onClick={showDrawer}>
                <Icon src="https://www.flaticon.com/svg/static/icons/svg/633/633816.svg" alt="Notifications" />
            </div>
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible3}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <div  onClick={showDrawer}>
                <Icon src="https://www.flaticon.com/svg/static/icons/svg/684/684849.svg" alt="Chat" />
            </div>
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible3}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

            <div
                style={{ margin: 3, padding: 15 }}
                onClick={showModal1}>SignIn</div>
            <Modal
                title="Title"
                visible={visible1}
                footer={null}
                onCancel={handleCancel1}
                confirmLoading={confirmLoading}
            >
                <p>{modalText}</p>
                <button onClick={handleLogin1}>Login</button>
            </Modal>
            <div
                style={{ margin: 3, padding: 15 }}
                onClick={showModal2}>SignUp</div>
            <Modal
                title="2nd"
                visible={visible2}
                footer={null}
                onCancel={handleCancel2}
                confirmLoading={confirmLoading}
            >
                <p>{modalText}</p>
                <button onClick={handleLogin2}>Login</button>
            </Modal>

        </NavbarWrapper>

    )
}

export { Navbar }
