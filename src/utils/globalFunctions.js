import { constants } from "./constants";

export const _checkValidStatus = data => {
    return [200, "200"].includes(data?.cod);
}

/**
 * This method converts the object to the query, other than false values
 * @param {object} obj 
 * @returns 
 */
export const convert_obj_to_query_string = (obj) => {
    if(!isObject(obj)) return "";
  
    let query_string = []
    if(obj && Object.keys(obj).length>0 )
    {
      Object.entries(obj).forEach(([key, val])=>{
        if(val)
        query_string.push(`${key}=${val}`)
      })
    }
  
    return query_string.length>0 && `?${query_string.join('&')}`
  
  }


/**
 * Purpose of this method to check the deep equality of the object
 * @param {object} object1 
 * @param {object} object2 
 * @returns 
 */
export const ObjectShallowEqualityCheck = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
}

/**
 * ----------------------- Generic methods -------------------------
 */


export const isObject = (obj) => {

    if(typeof obj==='object' && typeof obj !=='function' && obj !=null) return true;
    return false;
  }

export const isMobile = () => {
    if(!document) return false;
    if(getScreenWidth()<=constants.mobile_max_width) return true;
    return false;
}
export const isTablet = () => {
    if(!document) return false;
    if(getScreenWidth()>constants.mobile_max_width && getScreenWidth()<=constants.tablet_max_width) return true;
    return false;
}
export const isDesktop = () => {
    if(!document) return false;
    if(getScreenWidth()>constants.tablet_max_width) return true;
    return false;
}

const getScreenWidth = () => {

    return (document.body || document.documentElement).clientWidth
}

