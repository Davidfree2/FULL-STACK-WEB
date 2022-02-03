import React from 'react'
import { Chart } from 'react-google-charts'

class GoogleBarChart extends React.Component{
    render(){
        return(
        <div className='GoogleBarChart'>
        <Chart
          height='30vh'
          chartType="BarChart"
          loader={<div>Loading BarChart</div>}
          data={this.props.barData}
          options={{
            title: 'Expenses',
          }}
        />
        </div>
        )
    }
}

export default GoogleBarChart
