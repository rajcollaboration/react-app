import * as ActionTypes from './ActionTypes';

const initialState = {
    myCounter:0
};


export const counterObjReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREASE:
            return { ...state,myCounter:state.myCounter+1 };
        case ActionTypes.DECREASE:
            state.myCounter--;
            return { ...state,myCounter:state.myCounter-1 };
        default:
            return state;
    }
}