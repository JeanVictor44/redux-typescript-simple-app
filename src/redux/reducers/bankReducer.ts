import { Action } from "../actions/bankActions";
import { ActionType } from "../action-types";
import { RootState } from "../store";

const initialState = 0;

export const bankReducer = (state: number = initialState, action: Action) => {
    /* Agindo como um type guard para conseguirmos 
       identificar o tipo exato e as propriedade existentes nele 
    */
    switch(action.type){
        case ActionType.DEPOSIT:     
            if(Math.abs(action.payload) > 0){
                return state + Math.abs(action.payload)
            }
            return state  
        case ActionType.WITHDRAW:
            if(state - Math.abs(action.payload) >= 0){
                return state - Math.abs(action.payload)
            }
            return state
        case ActionType.BANKRUPT:
            return 0
        default: 
            return state
    }
}


export const selectBankValue = (state: RootState) => state.bank 