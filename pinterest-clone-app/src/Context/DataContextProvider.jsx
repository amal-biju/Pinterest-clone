import React, { Component } from 'react'
import axios from 'axios'
import random from './random.json'

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
             savedIds : [],
             today : [],
             random : [...random]
             
        }
        this.getTodayById=this.getTodayById.bind(this)
        this.getRandom = this.getRandom.bind(this)
    }
    getRandom(){
        return this.state.random
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
           
        });
        axios.get("http://localhost:3004/today")
        .then ((res)=>{
            this.setState({
                today : res.data
            })
        })
        .catch((err)=>{
            this.setState({
                error : true
            })
        })
    }
    
    getTodayById(id){
        
        const { today } = this.state
        

        const item = today.find( data => data.id == id )
        
        return item
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
        const { pins,isSaved,savedIds,today,random } = this.state
        const { getPins,addSavedPins,getTodayById,getRandom } = this
        const value = { pins,getPins,addSavedPins,getTodayById,getRandom,random,isSaved,savedIds,today }
        return (
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export  {DataContext,DataContextProvider}
