import React, { useState } from "react"
import { addtoDos } from "../redux/actions"
import { useDispatch } from 'react-redux'


const todoForm = () => {
  
  
  const dispatch = useDispatch();

    const onFormSubmit = (e) =>
    {

      e.preventDefault();
      dispatch(addtoDos(text));
      setText('')
     
    
    }
    const [text, setText] = useState('')


    const OnInputchange = (e) => {
      console.log(e.target.value)
      setText(e.target.value);
    }

    return (
   <form onSubmit={onFormSubmit}>
    <input type="text" onChange={OnInputchange} placeholder="enter your text"  style={{height:'3rem',width:'50%', margin:"2rem 20rem",border:'none',borderBottom:'1px solid', outline:'none'}} value={text} />
     
   </form>

    )
}

export default todoForm;