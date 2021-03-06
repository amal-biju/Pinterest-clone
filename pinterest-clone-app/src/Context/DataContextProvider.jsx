import React, { Component } from 'react'
import axios from 'axios'
import random from './random.json'

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
            savedPins : [],
            isSaved : false,
            savedIds : [],
            today : [],
            random : [...random],
            curruser: {
                "id": "1",
                "name": "Charleson Davis",
                "email": "charlz1717@gmail.com",
                "password": "secret",
                "following": ["amalbiju99@gamil.com", "eve.holt@reqres.in", "lovely@gmail.com"],
                "followers": ["amalbiju99@gamil.com", "eve.holt@reqres.in", "lovely@gmail.com"],
                "saved":[
                    {
                        "title":"Cooking"
                    },
                    {
                        "title":"Baking"
                    },
                    {
                        "title":"Gardening"
                    },
                    {
                        "title":"Camping"
                    }
                ],
                "age": "28",
                "saved_pins": [
                    {
                        "id": "0",
                        "title": "",
                        "description": "",
                        "author": "Mellany",
                        "url": "http://www.danibuenoblog.com.br/2019/11/looks-masculinos-t-shirt.html?m=1",
                        "img_url": "https://i.imgur.com/2K7tPsF.jpeg",
                        "category": "",
                        "tags": ""
                    },
                    {
                        "id": "1",
                        "title": "",
                        "description": "",
                        "author": "Mellany",
                        "url": "http://www.danibuenoblog.com.br/2019/11/looks-masculinos-t-shirt.html?m=1",
                        "img_url": "https://i.pinimg.com/236x/6a/56/8a/6a568a265598194c607e62e6e7adf0b7.jpg",
                        "category": "",
                        "tags": ""
                    },
                    {
                        "id": "2",
                        "title": "",
                        "description": "",
                        "author": "Mellany",
                        "url": "http://www.danibuenoblog.com.br/2019/11/looks-masculinos-t-shirt.html?m=1",
                        "img_url": "https://i.pinimg.com/236x/1d/79/05/1d7905fd963b35eb91f43400559e7e43.jpg",
                        "category": "",
                        "tags": ""
                    },
                    {
                        "id": "3",
                        "title": "",
                        "description": "http://www.danibuenoblog.com.br/2019/11/looks-masculinos-t-shirt.html?m=1",
                        "author": "Mellany",
                        "url": "",
                        "img_url": "https://i.pinimg.com/236x/d1/fe/cc/d1fecc8a6a91f2ff686e5d0e7f5b07ec.jpg",
                        "category": "",
                        "tags": ""
                    }
                ]
            }
        }
        this.getUsers = this.getUsers.bind(this)
        this.getPins = this.getPins.bind(this)
        this.addSavedPins = this.addSavedPins.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.getTodayById = this.getTodayById.bind(this)
        this.getRandom = this.getRandom.bind(this)
        this.addpin = this.addpin.bind(this)
        this.getPinById = this.getPinById.bind(this)
    }

    getRandom(){
        return this.state.random
    }
    componentDidMount() {
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

    getTodayById(id){
        console.log(id);
        const { today } = this.state
        console.log(today)

        const item = today.find( data => data.id == id )
        console.log(item);
        return item
    }

    addSavedPins(id){
        const  { savedIds,pins,savedPins } = this.state;

        const item = pins.find( data => data.id == id )
        console.log(item);


        this.setState({
            isSaved : true,
            savedIds : [...savedIds,id],
            savedPins : [...savedPins,item]
        })
    }

    handleLogout(){
        this.setState({
            isAuth:false
        })
    }

    handleLogin(email, password) {
        console.log("logging in")
        this.setState({
            isAuth: false
        })

        const { users } = this.state

        for (var i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if (password === users[i].password) {
                    console.log(users[i])
                    this.setState({
                        isAuth: true,
                        curruser: users[i],
                        error: false
                    })
                    return true
                }
                else {
                    this.setState({
                        error: 202
                    })
                    break
                }


            }
            else this.setState({
                error: 101
            })
        }

    }

    addpin(title,description,link,img){
        console.log("addingpin")
        axios({
            url: "http://localhost:3004/pins",
            method: "post",
            data: {
                title:title,
                description:description,
                author:this.state.curruser.name,
                img_url:link,
                url:img
            }
        }).then(res => {
            this.setState({
                isAuth: true,
                error: false
            })
        }).catch(err => {
            this.setState({
                error: 304,
                isLoading: false
            })
        })
    }

    handleSignup(email, password, age) {
        console.log("Registering")

        const { users } = this.state

        for (var i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                this.setState({
                    error: 303
                })
                return false

            }

        }

        axios({
            url: "http://localhost:3004/users",
            method: "post",
            data: {
                email: email,
                password: password,
                age: age
            }
        }).then(res => {
            this.setState({
                isAuth: true,
                error: false
            })
        }).catch(err => {
            this.setState({
                error: 304,
                isLoading: false
            })
        })

        return true
    }
    getPinById(id){
        const{ pins }=this.state

        const item=pins.find( data => data.id == id )
        
        return item
    }

    render() {
        const { pins, isAuth, users,isSaved,savedIds,error,curruser,today,random,savedPins } = this.state
        const { getPins, handleLogin ,getUsers,addSavedPins,handleLogout,handleSignup,getTodayById,getRandom,addpin,getPinById} = this
        const value = { 
            pins, 
            getPins, 
            isAuth, 
            pins, 
            handleLogin, 
            users ,
            getUsers,
            isSaved,
            savedIds,
            addSavedPins,
            handleLogout,
            handleSignup,
            error,
            curruser,
            today,
            getTodayById,
            random,
            getRandom,
            savedPins,
            addpin,
            getPinById
        }
        return (
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export { DataContext, DataContextProvider }