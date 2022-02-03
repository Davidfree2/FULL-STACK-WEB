import React from 'react'

class SignUpIn extends React.Component{
    render(){
        return(
            <div className='SignUpIn'>
                <form>
                    <label for='userName'>username</label>
                    <input id='userName' placeholder='username' ref={this.props.userNameRef} />
                    <label for='passWord'>password</label>
                    <input id='passWord' placeholder='password' ref={this.props.passWordRef}/>
                </form>
                <div className='SignButtons'>
                    <button onClick={this.props.SignInButton}>Sign In</button>
                    <button onClick={this.props.LogInButton}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default SignUpIn
