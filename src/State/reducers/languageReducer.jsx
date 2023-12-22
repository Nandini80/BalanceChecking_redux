import {Change_Language} from '../ActionType';

export const languageReducer = (state='english',action)=>{
    switch(action.type)
    {
        case Change_Language : 
        return action.payload;
        default :
        return state;
    }
};