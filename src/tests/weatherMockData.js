
export const dataToTransform = [
    {
        main: {
            "temp": 298.15
        },
        dt_txt: "2021-04-23 09:00:00"
    },
    {
        main: {
            "temp": 299.18
        },
        dt_txt: "2021-04-23 12:00:00"
    },
    {
        main: {
            "temp": 292.37
        },
        dt_txt: "2021-04-24 00:00:00"
    },
    {
        main: {
            "temp": 297.54
        },
        dt_txt: "2021-04-24 03:00:00"
    }

];

export const transformedData = {"barChartData": {"23 Apr 21": [{"temp": 298.15, "time": "09:00"}, {"temp": 299.18, "time": "12:00"}], "24 Apr 21": [{"temp": 
292.37, "time": "00:00"}, {"temp": 297.54, "time": "03:00"}]}, "cardsData": [{"avg_temp": 298.66499999999996, "date": "23 Apr 21"}, {"avg_temp": 294.95500000000004, "date": "24 Apr 21"}]};