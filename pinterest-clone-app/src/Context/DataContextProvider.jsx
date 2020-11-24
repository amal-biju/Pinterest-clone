import React, { Component } from 'react'
import axios from 'axios'

const DataContext = React.createContext()

class DataContextProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pins: [],
            users: [],
            isAuth: false,
            isLoading: false,
            error: false,
            
        }
        this.getUsers = this.getUsers.bind(this)
        this.getPins = this.getPins.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }


    getPins(){
        console.log("getting pins")
        axios.get("http://localhost:3004/pins")
            .then(res => {
                console.log(res)
                this.setState({
                    pins: res.data
                })
            })
            .catch(err => {
                this.setState({
                    error: true
                })
            })
    }
    getUsers(){
        console.log("getting Users")
        axios.get("http://localhost:3004/users")
            .then(res => {
                console.log(res)
                this.setState({
                    users: res.data
                })
                console.log(res)
            })
            .catch(err => {
                this.setState({
                    error: true
                })
            })
    }

    handleLogin(email, password) {
        console.log("logging in")
        this.setState({
            isAuth:true
        })

        // const { users } = this.state
        // console.log(users)
        // for (var i = 0; i < users.length; i++) {
            
        //     if (email == users[i].email) {
        //         console.log("start")
        //         if (password = users[i].password) {
        //             console.log("Success")
        //             this.setState({
        //                 isAuth: true
        //             })
        //         }
        //         else {
        //             this.setState({
        //                 error: true
        //             })
        //             break
        //         }

        //     }
        //     else {
        //         this.setState({
        //             error: true
        //         })
        //         break
        //     }
        // }
return true
        

    }

    render() {
        const { pins, isAuth, users } = this.state
        const { getPins, handleLogin ,getUsers} = this
        const value = { pins, getPins, isAuth, pins, handleLogin, users ,getUsers}
        return (
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export { DataContext, DataContextProvider }
