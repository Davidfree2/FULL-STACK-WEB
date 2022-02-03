import { Component} from 'react'
import Nav from './Components/Nav'
import phoneBottom from './Components/phoneBottom.jpg'
import SignUpIn from './Components/SignUpIn'

class SignUpInPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: null,
        }
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    signIn = async()=>{
        const username = await this.userNameRef.value;
        const password = await this.passWordRef.value;
        const url = "http://192.168.254.17:8080/findUserPassword";
        const postData = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({clientUsername: username})
        }
        const fetchUserPassword = await fetch(url, postData);
        const data = await fetchUserPassword.text();
        console.log(data);
        if (data == password){
            //console.log(`${password} and ${data} are the same!`);
            document.cookie = `username=${username}; expires=Sun, 1 Jan 2024 00:00:00 UTC; path=/`;
            alert('your signed in!');
        } else {
            alert('username and password to not match');
        }
    }
    
    signUp = async()=>{
        const username = await this.userNameRef.value;
        const password = await this.passWordRef.value;
        const url = "http://192.168.254.17:8080/createUser";
        const postData = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                newUsername: username,
                newPassword: password,
            })
        }
        const fetchUserPassword = await fetch(url, postData);
        document.cookie = `username=${username}; expires=Sun, 1 Jan 2024 00:00:00 UTC; path=/`;
        alert('Your signed up!');
    }

    render(){
        return(
            <div className='SignUpInPage'>
                <Nav username={this.state.username} />
                <h1>Sign in to enter Contacts Page</h1>
                <SignUpIn SignInButton={this.signIn} LogInButton={this.signUp} userNameRef={value=> this.userNameRef = value} passWordRef={value=> this.passWordRef = value}/>
                <div className='phoneImg'>
                <img src={phoneBottom} />
                </div>
            </div>
        )
    }
}

export default SignUpInPage
