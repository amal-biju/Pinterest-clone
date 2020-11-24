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
             users : [],
             savedPins : [],
             isSaved : false,
             savedIds : []
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
    addSavedPins = id => {
        const  { pins,savedPins,savedIds } = this.state;

        this.setState({
            isSaved : true,
            savedIds : [...savedIds,id]
        })
    }
    
    
    getPins = () => {
        return this.state.pins;
    }

    render() {
        const { pins,isSaved,savedIds } = this.state
        const { getPins,addSavedPins } = this
        const value = { pins,getPins,addSavedPins,isSaved,savedIds }
        return (
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export  {DataContext,DataContextProvider}
