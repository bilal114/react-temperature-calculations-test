import request from "@/redux/services/request";


export const getWeatherData = (query_string="") => {
    return request({
        url: `/data/2.5/forecast${query_string}`,
        method: 'GET',
    })
}