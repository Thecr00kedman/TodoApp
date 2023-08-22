import Home from "./Pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"


function App() {


 
  return (
    
    

         <BrowserRouter>
    
     <Routes>
           
           <Route path="/" element={<Home/>} />
             
     </Routes>
     </BrowserRouter>

  
    
    )
}

export default App
