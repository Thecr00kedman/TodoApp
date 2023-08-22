import { GetallTodos } from "../redux/actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { ToDo } from "./Todo"

export const Alltodos = () => {

   
    const dispatch= useDispatch();

    const todos = useSelector(state=> state.todos)
    useEffect(()=>{
        dispatch(GetallTodos())
       
    },[])


    return(
 
        
        <ul>
                {
                    todos.map(todo => (
                        <ToDo 
                            key={todo._id}
                            todo={todo}
                        />
                    ))
                }
            </ul>

  
 
          )
}

export default Alltodos