import { Component } from 'react'
import { Navigate } from 'react-router-dom'
import Nav from './Components/Nav'
import HomePageMain from './Components/Main'

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            session: null,
        }
    }

    render(){
        return(
            <> 
                <Nav />
                <HomePageMain />
            </>
        )
    }
}

export default HomePage
