import React from 'react'

class IncomeForm extends React.Component{
    render(){
        return(
            <div className='IncomeForm'>
                <form onSubmit={this.props.incomeSubmitAction}>
                    <label htmlFor='income'>Monthly Net Income</label>
                    <input type='number' id='income' ref={this.props.incomeAmount}/>
                    <button type='submit' onClick={this.props.incomeSubmitAction}>Add Income</button>
                </form>
            </div>
        )
    }
}

export default IncomeForm
