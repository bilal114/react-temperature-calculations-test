import { transformWeatherData } from '@/utils/weatherHelper';
import * as mocks from './weatherMockData';
import { convert_obj_to_query_string } from '@/utils/globalFunctions';
import { getUnitWiseCalculation, getDisplayableTempIndex } from '@/utils/weatherHelper';
import { constants } from '@/utils/constants';


describe('Checks basic functionalities',()=>{

    
    it('checks wheather transformWeatherData method is working fine or not', () => {

        expect(transformWeatherData(mocks.dataToTransform)).toEqual(mocks.transformedData);
    })

    it('checks if getDisplayableTempIndex method works correctly or not',()=>{
        // next move element index gets changed but same three or page_size elements keep appearing
        expect(getDisplayableTempIndex(2, 3,true, [0,1,2])).toEqual([0,1,2])
        // check next move
        expect(getDisplayableTempIndex(3, 3, true, [0,1,2]).sort()).toEqual([3,4,5])
        expect(getDisplayableTempIndex(6, 3, true, [3,4,5]).sort()).toEqual([6,7,8])
        // check back moves
        expect(getDisplayableTempIndex(5, 3,false, [6,7,8]).sort()).toEqual([3,4,5])
        expect(getDisplayableTempIndex(2, 3,false, [3,4,5]).sort()).toEqual([0,1,2])
    })

    it('checks the getUnitWiseCalculation method', ()=>{
        // kelvin to fahrenheit
        expect(getUnitWiseCalculation(298.66499999999996, constants.temp_fahrenheit, false)).toBe(78); // rounding value
        // kelvin to celcius
        expect(getUnitWiseCalculation(298.66499999999996, constants.temp_celcius, false)).toBe(26);

    })

    it('checks the convert_obj_to_query_string method',()=>{
        expect(convert_obj_to_query_string({test:'test_value',stringConversion:'converted_string',testParameter:'parameter'})).toBe('?test=test_value&stringConversion=converted_string&testParameter=parameter')
    })



})

    


   
