import React from 'react'
import { Chart } from 'react-google-charts'

class GooglePieChart extends React.Component{
    render(){
        return(
        <div className='GooglePieChart'>
        <Chart
          height= '30vh'
          chartType="PieChart"
          loader={<div>Loading PieChart</div>}
          data={this.props.pieData}
          options={{
            title: 'Expenses',
          }}
        />
        </div>
        )
    }
}

export default GooglePieChart
