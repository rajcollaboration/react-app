import ADD_TO_CART from "../constant";

export const addtocart = (data)=>{
    console.log(data);
    return{
        type:ADD_TO_CART,
        data:data

    }
}