import { createAction } from "redux-actions";

export enum ActionsCallback {
    changeA = "a"
}

export interface SelectType {
    a: number
}

export const changeActions = createAction(ActionsCallback.changeA, (data: number) => data);