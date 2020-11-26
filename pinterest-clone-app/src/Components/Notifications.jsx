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
const Posts = styled.div`
    width : 100%;
    border-radius : 20px;
    overflow : hidden;
    font-size : 16px;
    margin-bottom: 20px;
    display: flex;
    & img:hover {
        cursor : pointer;
    }
`;

const Image = styled.img`
    height : 150px;
    width : 100px;
    border : 1px solid white;
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
                width={350}
            >
                <p>You have got new ideas waiting for you</p>
                <Posts>
                    <div><Image src="https://i.pinimg.com/290x/d3/bb/39/d3bb392c0d89fa4dd24cf51c0e75e160.jpg" alt="" style={{height:"150px",width:"100px"}}/></div>
                    <div><Image src="https://i.pinimg.com/290x/7d/f1/a9/7df1a95f160e44ec73aed5a62f463c94.jpg" alt="" style={{height:"150px",width:"100px"}}/></div>
                    <div><Image src="https://i.pinimg.com/290x/80/7e/95/807e95f24d1d6beb566439027db0ffe5.jpg" alt="" style={{height:"150px",width:"100px"}}/></div>
                </Posts>
                <p>Some new Ideas are Wating for you</p>
                <Posts>
                    <div><Image src="https://i.pinimg.com/236x/5a/32/90/5a32905c3a7676f674c62c57b87aaf85.jpg" alt="" style={{height:"150px",width:"100px"}}/></div>
                    <div><Image src="https://i.pinimg.com/236x/3e/e4/b2/3ee4b2eeb0e594fc571a02d54615aaf4.jpg" alt="" style={{height:"150px",width:"100px"}}/></div>
                    <div><Image src="https://i.pinimg.com/236x/a7/6b/f0/a76bf0e5a791c2027ee9346b86f1e303.jpg" alt="" style={{height:"150px",width:"100px"}}/></div>
                </Posts>
            </Drawer> 
        </>
    )
}
export { Notifications }