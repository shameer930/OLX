import { INCREMENT,DECREMENT,RESET } from "../types/type";
import {FATCH_PRODUCT_LOADING,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILED} from "../types/type"
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../types/type';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});


export const increment = {
    type: INCREMENT
};
export const decrement = {
    type: DECREMENT
};
export const reset = {
    type: RESET
};

// export const  fetchData=()=>{
//     return async (dispatch) =>{
//         try{
//             const response=await fetch('http://localhost:3001/user/data/');
//             if(!response.ok){
//                 throw new Error("failed to fetch data")
//             }
//             const data=await response.json()
//             dispatch({
//                 type:FETCH_PRODUCT_SUCCESS,
//                 payload:data,
//             })
//         }
//         catch(error){
//             dispatch({
//                 type:FETCH_PRODUCT_FAILED,
//                 payload:error.message,
//             })
//         }
//     }
   
// }
export const fetchData = () => {
    return async (dispatch) => {
      console.log('Fetching data...'); // Add this line
      try {
        const response = await fetch('http://localhost:3001/user/data/');
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
       // Add this line
        dispatch({
          type: FETCH_PRODUCT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        console.error('Fetch error:', error); // Add this line
        dispatch({
          type: FETCH_PRODUCT_FAILED,
          payload: error.message,
        });
      }
    }
  }
  export const fetchSingleData = (_id) => {
    return async (dispatch) => {
      console.log('Fetching data...'); // Add this line
      try {
        console.log(_id,"from function")
        const response = await fetch(`http://localhost:3001/user/data/${_id}`);
        if (!response.ok) {
          console.log("failed to fetch data");
        }
        const data = await response.json();
        console.log('Data fetched from id:', data,"done"); // Add this line
        dispatch({
          type: FETCH_PRODUCT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        console.error('Fetch error:', error); // Add this line
        dispatch({
          type: FETCH_PRODUCT_FAILED,
          payload: error.message,
        });
      }
    }
  }
  export const fetchData2 = () => {
    return async (dispatch) => {
      console.log('Fetching data...'); // Add this line
      try {
        const response = await fetch('http://localhost:3001/login/user/');
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
       // Add this line
        dispatch({
          type: FETCH_PRODUCT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        console.error('Fetch error:', error); // Add this line
        dispatch({
          type: FETCH_PRODUCT_FAILED,
          payload: error.message,
        });
      }
    }
  }
  // Assuming fetchData2 is an asynchronous action


