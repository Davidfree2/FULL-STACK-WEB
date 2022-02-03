import React from 'react'

class ExpenseForm extends React.Component{
    render(){
        return(
            <div className='ExpenseForm'>
                <form action='/insert' method='post' onSubmit={this.props.expenseSubmitAction}>
                    <label htmlFor='expenseName'>Single Expense Name</label>
                    <input type='text' id='expenseName' ref={this.props.expenseNameInput}/>
                    <label htmlFor='expenseAmount'>Single Expense Amount</label>
                    <input type='number' id='expenseAmount' ref={this.props.expenseAmountInput}/>
                    <button type='submit' onClick={this.props.expenseSubmitAction}>Add Expense with Name</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm
