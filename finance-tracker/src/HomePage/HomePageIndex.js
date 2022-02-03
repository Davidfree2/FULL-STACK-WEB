import React from 'react'
import NavBar from './Components/NavBar'
import ExpenseForm from './Components/ExpenseForm'
import IncomeForm from './Components/IncomeForm'
import IncomeMinusExpense from './Components/IncomeMinusExpense'
import ExpensesList from './Components/ExpensesList'
import GooglePieChart from './Components/GooglePieChart'
import GoogleBarChart from './Components/GoogleBarChart'
import DebtToIncome from './Components/DebtToIncome'
import Expense from './Components/Expense'
import Income from './Components/Income'
import Footer from './Components/Footer'

class HomePageIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            TotalIncome: 0,
            TotalExpense: 0,
            IncomeMinusExpense: 0,
            AllExpenses: [],
            NameAndExpenses: [
                ['Expense', 'amount'],
            ]
        }
        this.getExpenseAmountAndName = this.getExpenseAmountAndName.bind(this);
        this.consoleLogThings = this.consoleLogThings.bind(this);
        this.getTotalIncome = this.getTotalIncome.bind(this);
        this.getIncomeMinusExpenses = this.getIncomeMinusExpenses.bind(this);
    }

    consoleLogThings=()=>{
        console.log(this.state);
    }

    getExpenseAmountAndName=(e)=>{
        e.preventDefault();
        var expenseName= this.expenseName.value;
        var expenseAmount = parseInt(this.expenseAmount.value);

        var addToTotalExpenses = parseInt(this.state.TotalExpense) + expenseAmount;
        var addToAllExpenses = [...this.state.AllExpenses,expenseAmount];
        var addToNameAndExpenses = [...this.state.NameAndExpenses,...[[expenseName, expenseAmount]]]; 

        this.setState({
            TotalExpense: addToTotalExpenses,
            AllExpenses: addToAllExpenses,
            NameAndExpenses: addToNameAndExpenses
        }, ()=>this.getIncomeMinusExpenses())
    }

    getTotalIncome=(e)=>{
        e.preventDefault();
        var totalIncome = parseInt(this.totalAmount.value);
        this.setState({
            TotalIncome: totalIncome
        }, ()=>this.getIncomeMinusExpenses())
    }

    getIncomeMinusExpenses=(number)=>{
        var incomeMinusExpense =   parseInt(this.state.TotalIncome) - parseInt(this.state.TotalExpense);
        this.setState({IncomeMinusExpense: incomeMinusExpense})
    }

    render(){
        return(
        <>
        <div className='HomePageIndex'>
            <NavBar />
            <IncomeMinusExpense incomeMinusExpenses={this.state.IncomeMinusExpense} />
        <div className='FormsContainer'>
            <ExpenseForm expenseSubmitAction={this.getExpenseAmountAndName} expenseNameInput={name => this.expenseName = name} expenseAmountInput={amount => this.expenseAmount = amount} />
            <IncomeForm incomeSubmitAction={this.getTotalIncome} incomeAmount={amount=> this.totalAmount = amount} />
        </div>
            <ExpensesList name={this.state.NameAndExpenses}/>
        </div>
        <div className='ChartContainer'>
            <GooglePieChart pieData={this.state.NameAndExpenses} />
            <GoogleBarChart barData={this.state.NameAndExpenses} />
        </div>
        <div className='DebtIncome'>
            <Income income={this.state.TotalIncome} />
            <DebtToIncome income={this.state.TotalIncome} expenses={this.state.TotalExpense} />
            <Expense expense={this.state.TotalExpense} />
        </div>
        <Footer />
        </>
        )
    }
}

export default HomePageIndex
