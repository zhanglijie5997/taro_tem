import { Reducer } from "redux";
import { handleActions, Action } from "redux-actions";
import { ActionsCallback } from "./actions";
import { a } from "./state";

// reducer 的值
export interface SelectType {
    a: number,
}


export const changeA = handleActions<number>({
    [ActionsCallback.changeA]: (states: number, action: Action<number>) => { 
        // 需要持久保留的状态存在localStorage里， 不需要持久保存的存在sessionStorage里;
       return action.payload;
    }
}, a);




