import React from 'react'

class IncomeMinusExpense extends React.Component{
    render(){
        return(
            <div className='IncomeMinusExpense'>
                <h1>Income After Expenses: {this.props.incomeMinusExpenses}$</h1>
            </div>
        )
    }
}

export default IncomeMinusExpense
