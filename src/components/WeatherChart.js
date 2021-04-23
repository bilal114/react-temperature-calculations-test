import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis
  } from '@devexpress/dx-react-chart-material-ui';
  
  import { Animation } from '@devexpress/dx-react-chart';
import { shallowEqual, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDataForChart } from '../utils/weatherHelper';
import { constants } from '../utils/constants';

function WeatherChart(props){

    const cardsData = useSelector((state)=>state.weather?.data?.cardsData, shallowEqual);
    const selected_index = useSelector((state)=>state.weather?.selected_index);
    const temp_unit = useSelector((state)=>state.weather?.temp_unit);
    const barChartIndex = cardsData?cardsData[selected_index]?.date: false;
    const [chartData, setChartData] = useState([]);
    let dateSpecificTemps;
    if(barChartIndex){
        dateSpecificTemps = props.data[barChartIndex];
    }

    useEffect(()=>{

        if(dateSpecificTemps)
        setChartData(getDataForChart(dateSpecificTemps, temp_unit));

    },[temp_unit,selected_index])



    return (
        <>
            <Chart
            data={chartData}
            >
                <ArgumentAxis />
                <ValueAxis max={8} showLabels={true} position="bottom" />
                
                <BarSeries
                    valueField="temp"
                    argumentField="time"    
                />
                <Title text={`Temperature measurement unit (${temp_unit===constants.temp_celcius?'℃':'℉'}) `} />
                <Animation />
            </Chart>
        </>
    );
}

export default WeatherChart;