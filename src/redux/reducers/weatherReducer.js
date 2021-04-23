import { constants } from "../../utils/constants";
import * as types from "../types";

const initialState = {
    type: null,
    data: null,
	message: null,
    temp_unit: constants.temp_fahrenheit,
    selected_index: 0,
    page_size: constants.mobile_page_size
}
export const weatherData = (state = initialState, {data, type, message, ...payload}) => {
    switch (type) {
		case types.GET_WEATHER_DATA_SUCCESS :
        case types.GET_WEATHER_DATA_LOAD :
        case types.GET_WEATHER_DATA_ERR :
        {
			return {
				...state,
				data,
                type,
                message
			};
        }
        case types.SET_TEMP_UNIT: {
            return {
				...state,
				temp_unit: payload.temp_unit
		    }
        }
        case types.SET_PAGE_SIZE: {
            return {
                ...state,
                page_size: payload.page_size
            }
        }
        case types.SET_SELECTED_INDEX: {
            return {
                ...state,
                selected_index: payload.selected_index
            };
        }
        default:
			return state;
	}
}

