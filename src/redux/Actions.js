import * as ActionTypes from './ActionTypes';

export const setPlayHandler = (index) => ({
    type: ActionTypes.PLAY,
    parameter: {itemIndex:index}
  });

  export const setPauseHandler = (index) => ({
    type: ActionTypes.PAUSE,
    parameter: {itemIndex:index}
  });

  export const setStopHandler = (index) => ({
    type: ActionTypes.STOP,
    parameter: {itemIndex:index}
  });
  export const setIncreaseHandler = () =>({type:ActionTypes.INCREASE,parameter:{}});
  export const setDecreaseHandler = () =>({type:ActionTypes.DECREASE,parameter:{}});