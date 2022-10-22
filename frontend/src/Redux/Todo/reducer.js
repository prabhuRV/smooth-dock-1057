
import {
 
  
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_SUCCESS1,

  SINGLE_TODO,
} from "../actionType";
const initialState={
  count:0,
todos:{
    isLoding:false,

    isError:false,
    data:[]
},
Singltodos:{
  isLoding:false,

  isError:false,
  Singledata:[]
}
}
export const Reducer = (state=initialState, action) => {
  //console.log(action)
  switch (action.type) {

    case GET_TODOS_REQUEST: {
      return {
        ...state,
        todos: {
          isLoading: true,
          isError: false,
          data: [],
        },
      };
    }
    case SINGLE_TODO: {
      return {
        ...state,
        todos: {
          isLoading: true,
          isError: false,
          Singledata: [],
        },
      };
    }
    case GET_TODOS_SUCCESS: {
        return {
          ...state,
          todos: {
            isLoading: false,
            isError: false,
            data: action.payload,
          },
        };
      }
      case GET_TODOS_SUCCESS1: {
        return {
          ...state,
          Singltodos: {
            isLoading: false,
            isError: false,
            Singledata: action.payload,
          },
        };
      }
      case GET_TODOS_ERROR: {
        return {
          ...state,
          todos: {
            isLoading: false,
            isError: true,
            Singledata: []
          },
        };
      }
     
   
    default: {
      return { ...state };
    }
  }
};
