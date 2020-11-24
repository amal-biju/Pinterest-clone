import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Modal } from 'antd';

const LoginBtn = styled.div`
    padding : 7px 10px;
    margin-left : 10px;
    border-radius : 30px;
    color : white;
    background-color : red;
    &:hover {
        cursor : pointer;
    }
`;

const Login = () => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
    };


    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const handleLogin = () => {
        var a = 1
        if (a == 1) {
            setModalText('The modal will be closed after two seconds');
            setConfirmLoading(true);
            setTimeout(() => {
                setVisible(false);
                setConfirmLoading(false);
            }, 2000);
        }
    };

    return (
        <div>
            <LoginBtn
                onClick={showModal}>Log in</LoginBtn>
            <Modal
                title="Login Page"
                visible={visible}
                footer={null}
                onCancel={handleCancel}
                confirmLoading={confirmLoading}
            >
                <p>{modalText}</p>
                <button onClick={handleLogin}>Login</button>
            </Modal>
        </div>
    )
}

export  { Login }
