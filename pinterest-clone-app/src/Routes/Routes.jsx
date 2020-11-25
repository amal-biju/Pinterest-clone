import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/Navbar'
import { Home } from '../Pages/Home2'
import styled from 'styled-components'
import { DashBoard } from '../Pages/Dashboard'

const NavPositioner = styled.div`
    position: sticky;
    top : 0px;
`;

const Routes = () => {
    return (
        <div>
           <NavPositioner><Route path="/" render={()=><Navbar />} /></NavPositioner>
           <Switch>
            <Route path="/" exact render={()=><Home />} />
            <Route path="/today" exact render={()=> <div><h1>Today {new Date().toLocaleDateString('en-GB')}</h1></div> } />
            <Route path="/following" exact render={()=><div><h1>Following 20 people</h1></div>} />
            <Route path="/dashboard" exact render={()=><DashBoard />} />
            <Route render={()=><h3>Error 404 Page not Found</h3>} />
           </Switch>
        </div>
    )
}

export default Routes
