import moment from 'moment';
import { constants } from './constants';

/**
 * This method is to transform the weather api returned data to the desired format which we needed for processing in react COMPONENTS
 * @param {*} data 
 * @returns 
 */
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
        tempsInADate.push({temp: data[i]?.main?.temp, time:formatDate(data[i]['dt_txt'], 'HH:mm')});
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
/**
 * By this method we prepare the mostly data regarding cards and barchart
 * @method pushCardsData
 * @param {array} tempsInADate 
 * @param {*} date 
 * @param {array} cardsData 
 * @param {object} barChartData 
 * @returns {object}
 */
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

/**
 * This method returns the card indexes on the basis of that we are showing temperature cards to the user
 * @method getDisplayableTempIndex
 * @param {number} switchedIndex 
 * @param {number} page_size 
 * @param {boolean} next 
 * @param {array} alreadyAllowedIndex 
 * @returns {array} 
 */
export const getDisplayableTempIndex = (switchedIndex, page_size, next=true, alreadyAllowedIndex=[]) => {
    let allowedIndexes = alreadyAllowedIndex;
    let nextAllowedIndex;
    if(next || switchedIndex===0){
        nextAllowedIndex = Array.from({length: page_size}, (_, i) => i + switchedIndex)
    }
    else
    {
        if(switchedIndex!=0)
        nextAllowedIndex = Array.from({length: page_size}, (_, i) =>  switchedIndex-i)
    }
    if(switchedIndex===0){
        return nextAllowedIndex;
    }
    if(next){
        if((switchedIndex%page_size===0 && page_size===constants.mobile_page_size) || (switchedIndex%page_size===0 && page_size!==constants.mobile_page_size) ){
            return nextAllowedIndex;
        }
    }
    else
    {
        if(((switchedIndex+1)%page_size===0 && page_size===constants.mobile_page_size) || ((switchedIndex+1)%page_size===0 && page_size!==constants.mobile_page_size) ){
            
            return nextAllowedIndex;
        }
    }
    

    return allowedIndexes;
}

/**
 * This method is to convert temperatures from kelvin to fahrenheit and celcius
 * @method getUnitWiseCalculation
 * @param {*} value 
 * @param {string} temp_unit 
 * @param {boolean} appendUnit 
 * @returns 
 */
export const getUnitWiseCalculation = (value, temp_unit, appendUnit=true) => {
    let temprature;
    if(temp_unit===constants.temp_fahrenheit){
        temprature =`${Math.round(kelvinToFahrenheit(value))}${appendUnit && '℉'}`
    }
    else
    {
        temprature = `${Math.round(kelvinToCelcius(value))}${appendUnit?'℃':''}`
    }
    return appendUnit?temprature: parseInt(temprature)
}

/**
 * This method prepares data to set titles and bars on the chart in the WeatherChart component
 * @param {*} temp_data 
 * @param {*} temp_unit 
 * @returns 
 */
export const getDataForChart = (temp_data, temp_unit) => {
    let data = [];
    for(let i in temp_data){
        data.push({temp: getUnitWiseCalculation(temp_data[i]?.temp, temp_unit, false),time:`${temp_data[i]?.time} - ${getUnitWiseCalculation(temp_data[i]?.temp, temp_unit, false)}${temp_unit===constants.temp_celcius?'℃':'℉'}`});
    }
    return data;
}



export const getFormatedDate = (date)=>{
    return moment(date).format('DD MMM YY');
}

export const formatDate = (date, format)=>{
    return moment(date).format(format);
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


/**
 * This object is the css object being used by the WeatherInfo component customize the material ui elements
 */
export const weatherCssObj = {
    root: {
      maxWidth: '100vw'
    },
    radio: {
        marginTop:'2%'
    },
    rotate: {
        transform: 'rotate(180deg)'
    },
    arrowIcon: {
        fontSize:60,
        cursor: 'pointer'
    },
    cardBorder: {
        border:'2px solid black'
    }
  }

