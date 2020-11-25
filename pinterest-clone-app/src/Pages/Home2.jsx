import React, { Component } from 'react'
import styled from 'styled-components'
import { DataContext } from '../Context/DataContextProvider'
import styles from "./masonry.module.css"

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pins : []
        }
    }
    componentDidMount() {
        const { getPins,getUsers} = this.context;
        getPins();
        getUsers();
    }
    
    
    render() {
        const { pins } = this.context
        return (
            <div className={styles.container}>
                {
                    pins.map( pin => (
                        <div className={styles.box}>
                            <img src={pin.img_url}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}
Home.contextType = DataContext

export  {Home}
