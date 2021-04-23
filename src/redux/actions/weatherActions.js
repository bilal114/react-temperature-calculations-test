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
            // const res = await getWeatherData(requestData);
            const res = {
                "cod": "200",
                "message": 0,
                "cnt": 40,
                "list": [
                    {
                        "dt": 1619103600,
                        "main": {
                            "temp": 296.15,
                            "feels_like": 295.97,
                            "temp_min": 295.74,
                            "temp_max": 296.15,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 984,
                            "humidity": 56,
                            "temp_kf": 0.41
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 40
                        },
                        "wind": {
                            "speed": 5.77,
                            "deg": 43,
                            "gust": 11.01
                        },
                        "visibility": 10000,
                        "pop": 0.79,
                        "rain": {
                            "3h": 0.83
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-22 15:00:00"
                    },
                    {
                        "dt": 1619114400,
                        "main": {
                            "temp": 294.82,
                            "feels_like": 294.56,
                            "temp_min": 292.15,
                            "temp_max": 294.82,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 984,
                            "humidity": 58,
                            "temp_kf": 2.67
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 32
                        },
                        "wind": {
                            "speed": 7.82,
                            "deg": 63,
                            "gust": 15.76
                        },
                        "visibility": 10000,
                        "pop": 0.7,
                        "rain": {
                            "3h": 0.44
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-22 18:00:00"
                    },
                    {
                        "dt": 1619125200,
                        "main": {
                            "temp": 293.64,
                            "feels_like": 293.23,
                            "temp_min": 292.39,
                            "temp_max": 293.64,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 983,
                            "humidity": 57,
                            "temp_kf": 1.25
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 46
                        },
                        "wind": {
                            "speed": 5.81,
                            "deg": 75,
                            "gust": 15.03
                        },
                        "visibility": 10000,
                        "pop": 0.64,
                        "rain": {
                            "3h": 0.5
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-22 21:00:00"
                    },
                    {
                        "dt": 1619136000,
                        "main": {
                            "temp": 291.71,
                            "feels_like": 291.34,
                            "temp_min": 291.71,
                            "temp_max": 291.71,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 984,
                            "humidity": 66,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 74
                        },
                        "wind": {
                            "speed": 5.78,
                            "deg": 69,
                            "gust": 12.01
                        },
                        "visibility": 10000,
                        "pop": 0.83,
                        "rain": {
                            "3h": 1.31
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-23 00:00:00"
                    },
                    {
                        "dt": 1619146800,
                        "main": {
                            "temp": 292.88,
                            "feels_like": 292.37,
                            "temp_min": 292.88,
                            "temp_max": 292.88,
                            "pressure": 1012,
                            "sea_level": 1012,
                            "grnd_level": 987,
                            "humidity": 56,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 6.91,
                            "deg": 61,
                            "gust": 13.25
                        },
                        "visibility": 10000,
                        "pop": 0.66,
                        "rain": {
                            "3h": 0.29
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-23 03:00:00"
                    },
                    {
                        "dt": 1619157600,
                        "main": {
                            "temp": 295.3,
                            "feels_like": 294.9,
                            "temp_min": 295.3,
                            "temp_max": 295.3,
                            "pressure": 1013,
                            "sea_level": 1013,
                            "grnd_level": 988,
                            "humidity": 51,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 7.54,
                            "deg": 63,
                            "gust": 9.73
                        },
                        "visibility": 10000,
                        "pop": 0.91,
                        "rain": {
                            "3h": 0.75
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-23 06:00:00"
                    },
                    {
                        "dt": 1619168400,
                        "main": {
                            "temp": 300.69,
                            "feels_like": 300.1,
                            "temp_min": 300.69,
                            "temp_max": 300.69,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 986,
                            "humidity": 34,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 35
                        },
                        "wind": {
                            "speed": 4.52,
                            "deg": 74,
                            "gust": 4.34
                        },
                        "visibility": 10000,
                        "pop": 0.25,
                        "rain": {
                            "3h": 0.12
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-23 09:00:00"
                    },
                    {
                        "dt": 1619179200,
                        "main": {
                            "temp": 300.93,
                            "feels_like": 300.18,
                            "temp_min": 300.93,
                            "temp_max": 300.93,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 984,
                            "humidity": 32,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02d"
                            }
                        ],
                        "clouds": {
                            "all": 17
                        },
                        "wind": {
                            "speed": 4.11,
                            "deg": 7,
                            "gust": 4.62
                        },
                        "visibility": 10000,
                        "pop": 0.19,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-23 12:00:00"
                    },
                    {
                        "dt": 1619190000,
                        "main": {
                            "temp": 296.07,
                            "feels_like": 295.54,
                            "temp_min": 296.07,
                            "temp_max": 296.07,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 983,
                            "humidity": 43,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.28,
                            "deg": 20,
                            "gust": 3.63
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-23 15:00:00"
                    },
                    {
                        "dt": 1619200800,
                        "main": {
                            "temp": 294.33,
                            "feels_like": 293.7,
                            "temp_min": 294.33,
                            "temp_max": 294.33,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 984,
                            "humidity": 46,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 0.46,
                            "deg": 289,
                            "gust": 0.52
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-23 18:00:00"
                    },
                    {
                        "dt": 1619211600,
                        "main": {
                            "temp": 293.54,
                            "feels_like": 292.84,
                            "temp_min": 293.54,
                            "temp_max": 293.54,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 983,
                            "humidity": 46,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 0.3,
                            "deg": 21,
                            "gust": 0.87
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-23 21:00:00"
                    },
                    {
                        "dt": 1619222400,
                        "main": {
                            "temp": 291.77,
                            "feels_like": 291.05,
                            "temp_min": 291.77,
                            "temp_max": 291.77,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 984,
                            "humidity": 52,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.7,
                            "deg": 64,
                            "gust": 3.33
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-24 00:00:00"
                    },
                    {
                        "dt": 1619233200,
                        "main": {
                            "temp": 297.4,
                            "feels_like": 296.77,
                            "temp_min": 297.4,
                            "temp_max": 297.4,
                            "pressure": 1011,
                            "sea_level": 1011,
                            "grnd_level": 986,
                            "humidity": 34,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 1.46,
                            "deg": 5,
                            "gust": 2.15
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-24 03:00:00"
                    },
                    {
                        "dt": 1619244000,
                        "main": {
                            "temp": 303.99,
                            "feels_like": 302.09,
                            "temp_min": 303.99,
                            "temp_max": 303.99,
                            "pressure": 1011,
                            "sea_level": 1011,
                            "grnd_level": 987,
                            "humidity": 20,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 3.27,
                            "deg": 348,
                            "gust": 3.89
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-24 06:00:00"
                    },
                    {
                        "dt": 1619254800,
                        "main": {
                            "temp": 307.46,
                            "feels_like": 304.96,
                            "temp_min": 307.46,
                            "temp_max": 307.46,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 985,
                            "humidity": 13,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 3.74,
                            "deg": 339,
                            "gust": 4.5
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-24 09:00:00"
                    },
                    {
                        "dt": 1619265600,
                        "main": {
                            "temp": 307.03,
                            "feels_like": 304.52,
                            "temp_min": 307.03,
                            "temp_max": 307.03,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 984,
                            "humidity": 11,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 3.69,
                            "deg": 339,
                            "gust": 4.37
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-24 12:00:00"
                    },
                    {
                        "dt": 1619276400,
                        "main": {
                            "temp": 300.94,
                            "feels_like": 299.68,
                            "temp_min": 300.94,
                            "temp_max": 300.94,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 985,
                            "humidity": 17,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.38,
                            "deg": 333,
                            "gust": 3.11
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-24 15:00:00"
                    },
                    {
                        "dt": 1619287200,
                        "main": {
                            "temp": 297.27,
                            "feels_like": 296.42,
                            "temp_min": 297.27,
                            "temp_max": 297.27,
                            "pressure": 1011,
                            "sea_level": 1011,
                            "grnd_level": 986,
                            "humidity": 26,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 0.87,
                            "deg": 89,
                            "gust": 1.38
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-24 18:00:00"
                    },
                    {
                        "dt": 1619298000,
                        "main": {
                            "temp": 295.86,
                            "feels_like": 294.94,
                            "temp_min": 295.86,
                            "temp_max": 295.86,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 985,
                            "humidity": 29,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 1.99,
                            "deg": 4,
                            "gust": 2.36
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-24 21:00:00"
                    },
                    {
                        "dt": 1619308800,
                        "main": {
                            "temp": 294.39,
                            "feels_like": 293.43,
                            "temp_min": 294.39,
                            "temp_max": 294.39,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 985,
                            "humidity": 33,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.05,
                            "deg": 346,
                            "gust": 2.26
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-25 00:00:00"
                    },
                    {
                        "dt": 1619319600,
                        "main": {
                            "temp": 300.71,
                            "feels_like": 299.57,
                            "temp_min": 300.71,
                            "temp_max": 300.71,
                            "pressure": 1011,
                            "sea_level": 1011,
                            "grnd_level": 987,
                            "humidity": 19,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.73,
                            "deg": 338,
                            "gust": 3.8
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-25 03:00:00"
                    },
                    {
                        "dt": 1619330400,
                        "main": {
                            "temp": 307.55,
                            "feels_like": 305,
                            "temp_min": 307.55,
                            "temp_max": 307.55,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 986,
                            "humidity": 12,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 3.24,
                            "deg": 341,
                            "gust": 3.13
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-25 06:00:00"
                    },
                    {
                        "dt": 1619341200,
                        "main": {
                            "temp": 310.57,
                            "feels_like": 307.54,
                            "temp_min": 310.57,
                            "temp_max": 310.57,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 984,
                            "humidity": 8,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 1
                        },
                        "wind": {
                            "speed": 3.16,
                            "deg": 347,
                            "gust": 3.89
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-25 09:00:00"
                    },
                    {
                        "dt": 1619352000,
                        "main": {
                            "temp": 310.4,
                            "feels_like": 307.34,
                            "temp_min": 310.4,
                            "temp_max": 310.4,
                            "pressure": 1006,
                            "sea_level": 1006,
                            "grnd_level": 982,
                            "humidity": 7,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 1
                        },
                        "wind": {
                            "speed": 2.84,
                            "deg": 0,
                            "gust": 3.93
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-25 12:00:00"
                    },
                    {
                        "dt": 1619362800,
                        "main": {
                            "temp": 303.57,
                            "feels_like": 301.61,
                            "temp_min": 303.57,
                            "temp_max": 303.57,
                            "pressure": 1007,
                            "sea_level": 1007,
                            "grnd_level": 983,
                            "humidity": 12,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 1
                        },
                        "wind": {
                            "speed": 1.26,
                            "deg": 46,
                            "gust": 1.4
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-25 15:00:00"
                    },
                    {
                        "dt": 1619373600,
                        "main": {
                            "temp": 300.59,
                            "feels_like": 299.41,
                            "temp_min": 300.59,
                            "temp_max": 300.59,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 984,
                            "humidity": 15,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 7
                        },
                        "wind": {
                            "speed": 1.46,
                            "deg": 355,
                            "gust": 1.56
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-25 18:00:00"
                    },
                    {
                        "dt": 1619384400,
                        "main": {
                            "temp": 298.51,
                            "feels_like": 297.57,
                            "temp_min": 298.51,
                            "temp_max": 298.51,
                            "pressure": 1007,
                            "sea_level": 1007,
                            "grnd_level": 983,
                            "humidity": 18,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 47
                        },
                        "wind": {
                            "speed": 2.59,
                            "deg": 15,
                            "gust": 2.96
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-25 21:00:00"
                    },
                    {
                        "dt": 1619395200,
                        "main": {
                            "temp": 296.91,
                            "feels_like": 295.89,
                            "temp_min": 296.91,
                            "temp_max": 296.91,
                            "pressure": 1007,
                            "sea_level": 1007,
                            "grnd_level": 982,
                            "humidity": 21,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 24
                        },
                        "wind": {
                            "speed": 1.82,
                            "deg": 35,
                            "gust": 1.87
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-26 00:00:00"
                    },
                    {
                        "dt": 1619406000,
                        "main": {
                            "temp": 303.65,
                            "feels_like": 301.68,
                            "temp_min": 303.65,
                            "temp_max": 303.65,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 984,
                            "humidity": 14,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 1.54,
                            "deg": 26,
                            "gust": 1.52
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-26 03:00:00"
                    },
                    {
                        "dt": 1619416800,
                        "main": {
                            "temp": 310.68,
                            "feels_like": 307.7,
                            "temp_min": 310.68,
                            "temp_max": 310.68,
                            "pressure": 1007,
                            "sea_level": 1007,
                            "grnd_level": 983,
                            "humidity": 9,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 1.89,
                            "deg": 303,
                            "gust": 2.99
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-26 06:00:00"
                    },
                    {
                        "dt": 1619427600,
                        "main": {
                            "temp": 312.89,
                            "feels_like": 309.59,
                            "temp_min": 312.89,
                            "temp_max": 312.89,
                            "pressure": 1004,
                            "sea_level": 1004,
                            "grnd_level": 981,
                            "humidity": 8,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 3.05,
                            "deg": 311,
                            "gust": 4.12
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-26 09:00:00"
                    },
                    {
                        "dt": 1619438400,
                        "main": {
                            "temp": 312.55,
                            "feels_like": 309.29,
                            "temp_min": 312.55,
                            "temp_max": 312.55,
                            "pressure": 1003,
                            "sea_level": 1003,
                            "grnd_level": 979,
                            "humidity": 8,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.22,
                            "deg": 329,
                            "gust": 3.66
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-26 12:00:00"
                    },
                    {
                        "dt": 1619449200,
                        "main": {
                            "temp": 305.62,
                            "feels_like": 303.3,
                            "temp_min": 305.62,
                            "temp_max": 305.62,
                            "pressure": 1004,
                            "sea_level": 1004,
                            "grnd_level": 980,
                            "humidity": 11,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.35,
                            "deg": 39,
                            "gust": 2.65
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-26 15:00:00"
                    },
                    {
                        "dt": 1619460000,
                        "main": {
                            "temp": 303.08,
                            "feels_like": 301.23,
                            "temp_min": 303.08,
                            "temp_max": 303.08,
                            "pressure": 1005,
                            "sea_level": 1005,
                            "grnd_level": 980,
                            "humidity": 12,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.5,
                            "deg": 49,
                            "gust": 2.53
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-26 18:00:00"
                    },
                    {
                        "dt": 1619470800,
                        "main": {
                            "temp": 300.48,
                            "feels_like": 299.3,
                            "temp_min": 300.48,
                            "temp_max": 300.48,
                            "pressure": 1004,
                            "sea_level": 1004,
                            "grnd_level": 980,
                            "humidity": 13,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.03,
                            "deg": 41,
                            "gust": 2.06
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-26 21:00:00"
                    },
                    {
                        "dt": 1619481600,
                        "main": {
                            "temp": 298.79,
                            "feels_like": 297.83,
                            "temp_min": 298.79,
                            "temp_max": 298.79,
                            "pressure": 1004,
                            "sea_level": 1004,
                            "grnd_level": 980,
                            "humidity": 16,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 1.66,
                            "deg": 65,
                            "gust": 1.72
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2021-04-27 00:00:00"
                    },
                    {
                        "dt": 1619492400,
                        "main": {
                            "temp": 305.71,
                            "feels_like": 303.38,
                            "temp_min": 305.71,
                            "temp_max": 305.71,
                            "pressure": 1006,
                            "sea_level": 1006,
                            "grnd_level": 982,
                            "humidity": 12,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 1.8,
                            "deg": 72,
                            "gust": 2.08
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-27 03:00:00"
                    },
                    {
                        "dt": 1619503200,
                        "main": {
                            "temp": 312.7,
                            "feels_like": 309.3,
                            "temp_min": 312.7,
                            "temp_max": 312.7,
                            "pressure": 1006,
                            "sea_level": 1006,
                            "grnd_level": 982,
                            "humidity": 7,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 1.52,
                            "deg": 283,
                            "gust": 1.95
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-27 06:00:00"
                    },
                    {
                        "dt": 1619514000,
                        "main": {
                            "temp": 314.75,
                            "feels_like": 310.9,
                            "temp_min": 314.75,
                            "temp_max": 314.75,
                            "pressure": 1003,
                            "sea_level": 1003,
                            "grnd_level": 979,
                            "humidity": 6,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 3.1,
                            "deg": 322,
                            "gust": 4.34
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-27 09:00:00"
                    },
                    {
                        "dt": 1619524800,
                        "main": {
                            "temp": 314.1,
                            "feels_like": 310.52,
                            "temp_min": 314.1,
                            "temp_max": 314.1,
                            "pressure": 1001,
                            "sea_level": 1001,
                            "grnd_level": 978,
                            "humidity": 7,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.91,
                            "deg": 354,
                            "gust": 4.05
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2021-04-27 12:00:00"
                    }
                ],
                "city": {
                    "id": 1172451,
                    "name": "Lahore",
                    "coord": {
                        "lat": 31.5497,
                        "lon": 74.3436
                    },
                    "country": "PK",
                    "population": 6310888,
                    "timezone": 18000,
                    "sunrise": 1619051186,
                    "sunset": 1619098530
                }
            };
            console.log('**************************************',res)
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

