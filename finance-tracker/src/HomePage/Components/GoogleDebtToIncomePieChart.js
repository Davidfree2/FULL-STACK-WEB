import React from 'react'
import { Chart } from 'react-google-charts'

class GoogleDebtToIncomePieChart extends React.Component{
    render(){
        return(
        <div className='GoogleDebtToIncomePieChart'>>
            <Chart
          chartType="PieChart"
          loader={<div>Loading PieChart</div>}
          options={{
            title: 'Debt vs Income',
          }}
        />
        </div>
        )
    }
}

export default GoogleDebtToIncomePieChart
