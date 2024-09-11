import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ShortageChart = () => {
    const options = {
        chart: {
            type: 'spline',
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1
            }
        },
        credits: {
            enabled: false // Disable the Highcharts label
        },
        title: {
            text: ''
            
        },
        xAxis: {
            categories: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        colors: ['#720202'],
        series: [{
            name: 'Shortage',
            data: [5, 10, 7, 12, 8, 15, 9] // Replace this with your actual data
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

export default ShortageChart;