import React from 'react'

class Main extends React.Component{
    render(){
        return(
            <div className='Main'>
                <div className='MainNav'>
                    <h1>Name</h1>
                    <h1>Street</h1>
                    <h1>City</h1>
                    <h1>Email</h1>
                </div>
                <div className='MainContent'>
                    {this.props.content.map(item=>(
                        <div className='MainItems'>
                            <h1>{item.name}</h1>
                            <h1>{item.street}</h1>
                            <h1>{item.city}</h1>
                            <h1>{item.email}</h1>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Main
