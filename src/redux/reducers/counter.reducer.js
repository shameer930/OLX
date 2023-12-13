
import { INCREMENT,DECREMENT,RESET } from "../types/type";
import { FETCH_PRODUCT_FAILED,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_LOADING } from "../types/type";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../types/type';

let initialState = {
  count : 0,
  data:[
    
  ],
  loading:false,
  error:false,
  cartItems: [],
  users: [],
};

  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
      case INCREMENT:
        return {
          ...state,
          count:state.count+1
        }
      case DECREMENT:
        return {
          ...state,
          count:state.count-1
        }
        case RESET:
          return initialState
          case FETCH_PRODUCT_LOADING:
           
          return {...state,data:null,loading:true,error:false}
          case FETCH_PRODUCT_SUCCESS:
            console.log("no hit")
          return {...state,data:action.payload,loading:false,error:false}
          case FETCH_PRODUCT_FAILED:
            
          return {...state,data:null,loading:false,error:true}
      default:
        
        return state;
    }
  };
  
  export default counterReducer;
  

