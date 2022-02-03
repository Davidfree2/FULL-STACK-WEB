import { Component } from 'react'
import { Link } from 'react-router-dom'
import phone2 from './phone2.jpg'

class HomePageMain extends Component{
    render(){
        return(
            <div className='HomePageMain'>
            <div className='HomePageLeft'>
                <div className='Title'>
                    <h1>Your AddressBook</h1>
                </div>
                <div className='HomePageDescription'>
                    <h1>Welcome to Your AdressBook here you can add, delete, and keep up with old contacts that you have. All one hundred percent secure and with auto back-up will backup to all your devices.All using a Secure network that keeps your information safe.</h1>
                </div>
                <div className='HomePageButtons'>
                   <button><Link to='/logInSignUp'>Login</Link></button> 
                   <button><Link to='/logInSignUp'>Sign Up</Link></button> 
                </div>
            </div>
            <div className='HomePageRight'>
                <img src={phone2} />
            </div>
            </div>
        )
    }
}

export default HomePageMain
