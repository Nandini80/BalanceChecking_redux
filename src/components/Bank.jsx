import React from 'react'
import { useDispatch } from 'react-redux';
import {depositMoney, withdrawMoney} from '../State/action-creators/index';

function Store() {
  const dispatch = useDispatch();

  const deposit =(items)=>{
    dispatch(depositMoney(items));
  }

  const withdraw =(items)=>{
    dispatch(withdrawMoney(items));
  }
  return (
    <div>
        <center>
        <h2 className='mt-5'>Deposit/Withdraw money</h2> 
        {/* <button className="btn btn-primary mx-2" onClick={()=>dispatch(actionCreators.withdrawMoney(50))}>- 50</button>
        Update Balance
        <button className="btn btn-primary mx-2" onClick={()=>dispatch(actionCreators.depositMoney(50))}>+ 50</button> */}
        <button className="btn btn-primary mx-2" onClick={()=>withdraw(50)}>- 50</button>
        Update Balance
        <button className="btn btn-primary mx-2" onClick={()=>deposit(50)}>+ 50</button>
        </center>
    </div>
  )
}

export default Store;