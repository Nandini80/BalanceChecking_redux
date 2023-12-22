import {deposit,withdraw} from '../ActionType';

//state=0 is initial state(amount)
export const amountReducer =(state=0,action)=>{
  if(action.type ===deposit)
  {
    return state+action.payload;
  }
  else if(action.type ===withdraw)
  {
    return state-action.payload;
  }
  else 
  return state;
}