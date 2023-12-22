import {Change_Theme} from '../ActionType';

export const ThemeReducer = (state=false,action)=>{
    switch(action.type)
    {
        case Change_Theme : 
        return action.payload;
        default :
        return state;
    }
};