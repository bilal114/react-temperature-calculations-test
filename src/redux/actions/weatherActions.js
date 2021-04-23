import * as types from "../types"
import {
    getWeatherData,
    
} from "@/redux/services/weather";
import { _checkValidStatus } from "@/src/utils/globalFunctions"
import { transformWeatherData } from "../../utils/weatherHelper";

export const getWeatherDataActions = (requestData) => {
    return async (dispatch) => {
        dispatch({type: types.GET_WEATHER_DATA_LOAD, data: []})
        
        try{
            const res = await getWeatherData(requestData);
            
            if(_checkValidStatus(res)){
                // transorm weather data
                const data = transformWeatherData(res.list);

                dispatch({type: types.GET_WEATHER_DATA_SUCCESS, data , message: 'Success'})
            }
        }catch(err){
            dispatch({type: types.GET_WEATHER_DATA_ERR, data: err, message: err.message})
        }
    }
}

export const setTempUnit = (tempUnit)=>{
    return {type:types.SET_TEMP_UNIT, temp_unit: tempUnit}
}


export const setSelectedIndex = (newIndex)=>{
    return {type:types.SET_SELECTED_INDEX, selected_index: newIndex}
}

export const setPageSize = (page_size)=>{
    return {type:types.SET_PAGE_SIZE, page_size}
}

