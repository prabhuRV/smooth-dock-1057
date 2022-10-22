
import axios from "axios";
import {  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS, } from "../actionType";

export const getTodoRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
export const getTodoSuccrss = (payload) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload,
  };
};
export const getTodoFailure = () => {
  return {
    type: GET_TODOS_ERROR,
  };
};

export const deleteTodoRequest=()=>
{
  return {
    type: DELETE_TODO,
  };
}

export const deleteTodoSuccess=()=>
{
  return {
    type: DELETE_TODO_SUCCESS,
  };
}

export const deleteTodoFaliure=()=>
{
  return {
    type: DELETE_TODO_FAILURE,
  };
}


export const addTodoRequest=()=>
{
  return {
    type: ADD_TODO_REQUEST,
  };
}

export const addTodoSuccess=(payload)=>
{
  return {
    type: ADD_TODO_SUCCESS,payload
  };
}
export const addTodoFaliue=()=>
{
  return {
    type: ADD_TODO_FAILURE,
  };
}
let token=localStorage.getItem('token')
export const addinTodo= (payload)=>(dispatch)=>
{
  console.log(payload);

    dispatch(addTodoRequest())
  return axios({
    url: "https://floating-island-29484.herokuapp.com/todo/create",
    method: "post",
    data:payload,
     
    
  })
    .then((res) => {
      // console.log(res.data);
      dispatch(addTodoSuccess(res.data))
    })
    .catch((err) => {
      console.log(err);
      dispatch(addTodoFaliue());
    });
}

export const getTodos =  () => (dispatch) => {
  dispatch(getTodoRequest());
 return  axios({url:"https://floating-island-29484.herokuapp.com/todo/",
 method:"get",
 
}).then((res) =>
//console.log(res.data))
dispatch(getTodoSuccrss(res.data)))
    .catch((err) => dispatch(getTodoFailure()));
};

export const deleteTodos =  (_id) => (dispatch) => {
  dispatch(getTodoRequest());
  //console.log(id)
  return axios({url:`https://floating-island-29484.herokuapp.com/todo/${_id}/delete`,
    method:"delete",
   })
    .then((res) => dispatch(deleteTodoSuccess(res.data)))
    .catch((err) => dispatch(deleteTodoFaliure()));
};

export const updateTodos =  (_id,payload) => (dispatch) => {
  dispatch(getTodoRequest());
  //console.log(id)
  return axios({url:`https://floating-island-29484.herokuapp.com/todo/${_id}/edit`,
    method:"patch",
    
    data:payload
  })
    .then((res) => dispatch(deleteTodoSuccess(res.data)))
    .catch((err) => dispatch(deleteTodoFaliure()));
};