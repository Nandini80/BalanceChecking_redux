import {deposit,withdraw,Change_Theme,Change_Language} from '../ActionType';

//payload can be anything like obj,array,string , boolean,int
export const depositMoney=(amount)=>({
    type:deposit,
    payload: amount   
});
    
export const withdrawMoney=(amount)=>({
    type:withdraw,
    payload: amount   
});
    
export const ChangeTheme=(theme)=>({
    type:Change_Theme,
    payload: theme   
});

export const ChangeLanguage=(type)=>({
    type:Change_Language,
    payload: type   
});
    