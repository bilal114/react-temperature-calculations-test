import { constants } from "./constants";

export const _checkValidStatus = data => {
    return [200, "200"].includes(data?.cod);
}

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


export const isObject = (obj) => {

    if(typeof obj==='object' && typeof obj !=='function' && obj !=null) return true;
    return false;
  }

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