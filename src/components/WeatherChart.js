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
import { makeStyles } from '@material-ui/core/styles';

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


const useStyles = makeStyles({
    chartRoot: {
      maxHeight: 200,
      marginTop:'15%'
    }
    
  });
const classes = useStyles();
    return (
        <>
            <Chart
            data={chartData}
            className={classes.chartRoot}
            >
                <ArgumentAxis labelComponent={(e)=>{ return (<ArgumentAxis.Label data-testid="graph-temp-unit" text={e.text.split('-')[1]} x={e.x} y={e.y} />); }} />
                <ValueAxis max={8} showLabels={false} />
                
                <BarSeries
                    name = "test"
                    valueField="temp"
                    argumentField="time" 
                    
                />
                    
                    
                <Animation />
            </Chart>
        </>
    );
}

export default WeatherChart;