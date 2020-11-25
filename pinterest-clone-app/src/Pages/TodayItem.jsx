import React from 'react'
import { DataContext } from '../Context/DataContextProvider'


class TodayItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todayItem : null 
        }
    }
   componentDidMount(){

        console.log(this.props.match.params)

        const { getTodayById } = this.context
        const { today_id } = this.props.match.params

        this.setState({
            todayItem : getTodayById(today_id)
        })
   }
    render(){
        const { todayItem } = this.state
        return(
            <div>
                Display Today Items
            </div>
        )
    }
}

TodayItem.contextType = DataContext

export { TodayItem } 