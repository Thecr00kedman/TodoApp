import React from 'react'
import Header from '../components/header'
import ToDoForm from '../components/ToDoForm'
import Alltodos from '../components/Alltodo'


function Home() {
  return (
    <>
    <Header/>
    <ToDoForm/>
    <Alltodos/>
    </>
  )
}


export default Home