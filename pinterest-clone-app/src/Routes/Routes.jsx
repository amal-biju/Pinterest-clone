import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/Navbar'
import { Home } from '../Pages/Home'
import styled from 'styled-components'
import { Today } from '../Pages/Today'
import { TodayItem } from '../Pages/TodayItem'


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
            <Route path="/today" exact render={()=> <Today/> } />
            <Route path="/today/:today_id" exact render={(props)=> <TodayItem {...props}/> }/>
            <Route path="/following" exact render={()=><div><h1>Following 20 people</h1></div>} />
           </Switch>
        </div>
    )
}

export default Routes
