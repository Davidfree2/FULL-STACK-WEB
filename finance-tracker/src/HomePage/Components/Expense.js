import React from 'react'

class Expense extends React.Component{
    render(){
        return(
            <div className='Expense'>
                <h1>Total Expenses: {this.props.expense}$</h1>
            </div>
        )
    }
}

export default Expense
