import moment from 'moment';
import { constants } from './constants';

export const transformWeatherData =  (data) =>{

    


    let cardsData = [];
    let barChartData = {};
    let tempsInADate = [];
    let date="";
    for(let i in data){
        if(getFormatedDate(data[i]['dt_txt'])!=getFormatedDate(date)){

            let dataObject = pushCardsData(tempsInADate, date, cardsData, barChartData)
            cardsData = dataObject.cardsData;
            barChartData = dataObject.barChartData;
            tempsInADate = [];
        }
        tempsInADate.push({temp: data[i]?.main?.temp, time:formatDate(data[i]['dt_txt'], 'LT')});
        date = data[i]['dt_txt'];
    }

    let dataObject = pushCardsData(tempsInADate, date, cardsData, barChartData)
    cardsData = dataObject.cardsData;
    barChartData = dataObject.barChartData;

    
    return {
        cardsData,
        barChartData
    }

}

function pushCardsData (tempsInADate, date ,cardsData, barChartData ){
    let return_data = [];
    if(tempsInADate?.length>0){
        let avg_temp = tempsInADate.reduce((acc,el)=>acc+el?.temp,0)/tempsInADate?.length
        cardsData.push({
            date: getFormatedDate(date),
            avg_temp
        })
    }
    if(tempsInADate?.length>0){
        barChartData[getFormatedDate(date)] = tempsInADate;
    }
    return_data = {
        cardsData,
        barChartData
    }
    return return_data;
}
export const getFormatedDate = (date)=>{
    return moment(date).format('DD MMM YY');
}

export const formatDate = (date, format)=>{
    return moment(date).format(format);
}

export const getTemperatureWiseCalculation = (value, temp_unit) => {
    if(temp_unit===constants.temp_fahrenheit){
        return `${Math.round(kelvinToFahrenheit(value))}℉`
    }
    else
    {
        return `${Math.round(kelvinToCelcius(value))}&#8451;`
    }
}

export const convertTemprature = (value, temp_unit) => {
    if(temp_unit===constants.temp_fahrenheit){
        return Math.round(kelvinToFahrenheit(value))
    }
    else
    {
        return Math.round(kelvinToCelcius(value))
    }
}

export const getDataForChart = (temp_data, temp_unit) => {
    let data = [];
    for(let i in temp_data){
        data.push({temp: convertTemprature(temp_data[i]?.temp, temp_unit),time:temp_data[i]?.time});
    }
    return data;
}

export const fahrenheitToCelcius = (fTemp)=>{
    
    return (fTemp - 32) * 5 / 9;
}

export const kelvinToFahrenheit = (kelvinTemp) => {
    return ((kelvinTemp-273.15)*1.8)+32
}

export const kelvinToCelcius = (kelvinTemp) => {
    return kelvinTemp-273.15
}