import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import WeatherChart from "../components/WeatherChart";
import WeatherInfo from "../components/WeatherInfo";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {getWeatherDataActions} from "@/redux/actions/weatherActions";
import { convert_obj_to_query_string } from "@/utils/globalFunctions";
import { GET_WEATHER_DATA_SUCCESS } from "@/redux/types";
import { constants } from "@/utils/constants";
import useDeviceDetect from "@/utils/useDeviceDetect";
import { setPageSize } from "@/redux/actions/weatherActions";
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
function Weather(){

    const [isLoaded, setIsLoaded] = useState(false);

    const weatherData = useSelector((state)=>state.weather, shallowEqual);
    const dispatch = useDispatch();
    // ------------------------------------------------------------------
    // Initial mount and send request to server
    useEffect(()=>{
        let request_data_object = {
            q: 'Munich,de',
            APPID : process.env.REACT_APP_APPID,
            cnt: 40
        };
        dispatch(getWeatherDataActions(convert_obj_to_query_string(request_data_object)));
    },[])
    
    // --------------------------------------------------------------------
    // In this side effect we set the loader state
    useEffect(()=>{
        if(weatherData.type===GET_WEATHER_DATA_SUCCESS){
            setIsLoaded(true);
        }
    },[weatherData.type])

    // -------------------------------------------------------------------
    // detect device and set page size accordinlgy
    const {isMobile, isTablet, isDesktop} = useDeviceDetect();
    useEffect(()=>{

        if(isMobile && weatherData?.page_size!==constants.mobile_page_size){
            dispatch(setPageSize(constants.mobile_page_size));
        }

    },[isMobile, weatherData?.page_size,isTablet, isDesktop])
    
    // --------------------------------------------------
    // define max width of container element
    const useStyles = makeStyles({
        container: {
          maxWidth: isMobile?'350px':'600px', // setting this width because we don't need too big screen
          margin:'0 auto'
        }
      });
    const classes = useStyles();


    useEffect(()=>{

        
        if((isDesktop || isTablet) && weatherData?.page_size!==constants.desktop_page_size){
            dispatch(setPageSize(constants.desktop_page_size));
        }
        
    },[isMobile, weatherData?.page_size, isTablet, isDesktop])
    

    // --------------------------------------------------------------------
    // Render or load screens... 
    return (isLoaded && weatherData?.data?.cardsData)?(
        <Container className={classes.container}>
            <WeatherInfo data={weatherData.data.cardsData}/>
            <WeatherChart data={weatherData.data.barChartData} />
        </Container>
    ):(
        <Loader />
    );
}

export default Weather;