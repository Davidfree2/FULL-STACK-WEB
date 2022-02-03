import React from 'react'

class Income extends React.Component{
    render(){
        return(
            <div className='Income'>
                <h1>Total Income: {this.props.income}$</h1>
            </div>
        )
    }
}

export default Income
