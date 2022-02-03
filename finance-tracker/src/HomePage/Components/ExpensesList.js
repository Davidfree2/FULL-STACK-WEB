import React from 'react'

class ExpensesList extends React.Component{
    render(){
        return(
            <div className='ExpensesList'>
            {this.props.name.map(item=>(
                <>
                <ul>
                    <li>{item[0]}:</li>
                    <li>{item[1]}$</li>
                </ul>
                </>
            ))}
            </div>
        )
    }
}

export default ExpensesList
