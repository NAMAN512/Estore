import * as actionTypes from "../../actions/login/type";

const initialState={
    userdetaills:{}
}

export const login=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.LOGIN:
            return {userdetails:action.data}
        default:
            return state;
    }
}