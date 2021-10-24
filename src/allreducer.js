import empdata_json from './data/employeedata.json';

function empdatareducer(state = empdata_json, action){
    switch(action.type){
        case "ADD_NEW_EMP":
            let empdata = [...state,action.payload];
            return empdata;
            
        default:
            return state;
    }
}

export default empdatareducer;