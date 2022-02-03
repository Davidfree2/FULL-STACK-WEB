import React from 'react'

class DebtToIncome extends React.Component{
    render(){
        if (this.props.expenses == 0 || this.props.income == 0){
            return(
                <div className='DebtToIncome'>
                    <h1>Add expense and income</h1>
                </div>
            )
        }

        return(
            <div className='DebtToIncome'>
                <h1>Expenses over Income</h1>
                <h1>{this.props.expenses / this.props.income * 100}%</h1>
            </div>
        )
    }
}

export default DebtToIncome
