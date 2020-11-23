import React, { Component } from 'react'
import axios from 'axios'

const DataContext = React.createContext()

class DataContextProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pins : [],
             isAuth : false,
             isLoading : false,
             error : false,
             users : []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3004/pins")
        .then(res => {
            this.setState({
                pins : res.data
            })
        })
        .catch( err => {
            this.setState({
                error : true
            })
        })
    }
    
    
    getPins = () => {
        return this.state.pins;
    }

    render() {
        const { pins } = this.state
        const { getPins } = this
        const value = { pins,getPins }
        return (
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export  {DataContext,DataContextProvider}
