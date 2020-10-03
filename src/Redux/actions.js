
export function getList(data) {  
    return {type:'GET_LIST',payload:data}
    }  
;  
export function startSearch(data) {  
    return {type:'START_SEARCH',payload:data}
    }  
;  
export function changeTripType(data) {  
    return {type:'CHANGE_TRIP',payload:data}
    }  
;  
export function changeOrigin(data,key) { 
    return {type:'CHANGE_ORIGIN',payload:data,key:key}
    }  
;  



