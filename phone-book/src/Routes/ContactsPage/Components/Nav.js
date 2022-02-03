import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component{
    render(){
        return(
            <div className='Nav'>
                <div className='NavContent'>
                    <h1><Link to='/'>Home</Link></h1>
                    <h1><Link to='/logInSignUp'>Login / Sign Up</Link></h1>
                    <h1><Link to='/logInSignUp' onClick={this.props.signOut}>Sign Out</Link></h1>
                </div>
            </div>
        )
    }
}

export default Nav
