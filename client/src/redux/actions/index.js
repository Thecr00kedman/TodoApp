import axios from 'axios'
import {ADD_NEW_TODO, GET_ALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from '../type.js'

const API_URL = "http://localhost:8000";


    export const addtoDos = (data)=> async(dispatch) => {
try {
       const response = await axios.post(`${API_URL}/add`,{data})
       console.log(response)

       dispatch({type:ADD_NEW_TODO, payload:response.data})
       
              } 
catch (error) {

    console.log('error while calling the addTodo api', error.message)
    
}
}

export const GetallTodos =()=> async(dispatch)=>{

    try {
        const response= await axios.get(`${API_URL}/all`)
        console.log(response)
        dispatch({type:GET_ALL_TODO, payload:response.data})

        
    } 
    catch (error) {
        console.log('error while calling the Getalltodos api')
    }
}

export const toggleToDo = (id)=> async(dispatch)=>{
    try {
        const response = await axios.get(`${API_URL}/done/${id}`)
        console.log(response)
        dispatch({type:TOGGLE_TODO, payload:response.data})
        
    } catch (error) {
        
        console.log('error while calling the toggleTodo api',error.message)
    }

}

export const updateTodo = (id, data)=> async(dispatch) => {

    try {
        const response = await axios.put(`${API_URL}/update/${id}`,{data})
        console.log(response)
        dispatch({type:UPDATE_TODO, payload:response.data})
    } catch (error) {

        console.log('error while calling the UpdateTodo api', error)
        
    }

}

export const deleteTodo = (id) => async(dispatch)=> {
    try {
        
        const response = await axios.delete(`${API_URL}/delete/${id}`)
        console.log(response)
        
        dispatch({type:DELETE_TODO, payload:response.data})

    } catch (error) {
        console.log('error while calling the delete todo Api', error)
    }

}