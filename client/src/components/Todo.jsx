import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toggleToDo } from '../redux/actions';
import { updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";
import { GetallTodos } from "../redux/actions";




export const ToDo = ({todo}) =>{
    const [editing, setEditing] = useState(false)
    const dispatch = useDispatch();
    const [text, setText] = useState(todo.data)

  const onFormSubmit=(e) => {
    e.preventDefault();

    setEditing(prevState=>!prevState)
    dispatch(updateTodo(todo._id,text))
  }

  const deletesingleTodo = ()=> {
    
    dispatch(deleteTodo(todo._id))
   

  }


    return(
    
    
        <li  className='TodoContainer'   key={todo._id} style={{
            textDecoration: todo?.done ? 'line-through' : '',
            color: todo?.done ? 'black' : 'white'
        }} data-testid="todo-test">
                <div>
                <span style={{ display: editing ? 'none' : '' }} onClick={()=>dispatch(toggleToDo(todo._id))} >{text}</span>
                
                <form style={{ display: editing ? 'inline' : 'none' }}
                     onSubmit={onFormSubmit}>
                <input
                    type="text"
                    value={text}
                    className="edittodo"
                    onChange={(e) => setText(e.target.value)}
                />
                </form>
                </div>
                <div>
                <Button   style={{marginRight:"10px", padding:'5px'}} color='primary' onClick={()=>setEditing(prevState=>!prevState)}><EditIcon /></Button>
                <Button   style={{marginRight:"10px"}} color='primary' onClick={deletesingleTodo}><DeleteIcon /></Button>
                </div>
        </li>
    
    )


}
export default ToDo;