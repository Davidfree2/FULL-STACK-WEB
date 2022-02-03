import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <div className='Footer'>
                <div className='top'>
                    <i class="material-icons">verified_user</i>
                    <i class="material-icons">savings</i>
                    <i class="material-icons">grade</i>
                    <i class="material-icons">bookmark_border</i>
                </div>
                <div className='bottom'>
                    <h1>Created by David Esquerra with React,nodejs,express,postgres</h1>
                    <h1>everything seen here is an example and should not be used to major use</h1>
                </div>
            </div>
        )
    }
}

export default Footer
