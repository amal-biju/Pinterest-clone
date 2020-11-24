import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Drawer } from 'antd';

const Icon = styled.img`
    padding : 12px;
    height : 50px;
    opacity : 0.6;
    margin-left : 5px;
    border-radius : 50%;
    &:hover{
        background-color : #eee;
        cursor : pointer;
    }
`;

const Notifications = () => {

    const [visible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };


    return (
        <>
           <div onClick={showDrawer}>
                <Icon src="https://www.flaticon.com/svg/static/icons/svg/633/633816.svg" alt="Notifications" />
            </div>
            <Drawer
                title="Updates"
                style={{textAlign:"center"}}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer> 
        </>
    )
}

export { Notifications }
