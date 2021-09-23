const initialState={
    cardData:[]
}
export const cardItem=(state=initialState,actions)=>{
    switch (actions.type) {
        case "ADD_TO_CART":
            return{
                ...state,
                cardData: actions.data
            }
          
    
        default:
            return state;
       
    }
}