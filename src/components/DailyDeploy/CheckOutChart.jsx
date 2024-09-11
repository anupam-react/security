import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const CheckOutChart = () => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false // Disable the Highcharts label
        },
        xAxis: {
            categories: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        colors: ['#F02946'],
        series: [{
            name: 'Check Out',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2]
        }]
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default CheckOutChart;