import React from 'react'
import { Chart } from 'react-google-charts'

class GoogleExpenseVsIncomeChart extends React.Component{
    render(){
        return(
        <>
            <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading PieChart</div>}
          data={this.props.pieData}
          options={{
            title: 'Expenses vs Income',
          }}
        />
        </>
        )
    }
}

export default GoogleExpenseVsIncomeChart 
