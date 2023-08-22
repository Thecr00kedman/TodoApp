import mongoose, { disconnect, mongo } from "mongoose";

const Connection = () => {

    const MONGO_DB_URL ="mongodb://127.0.0.1:27017/ToDoApp"

    mongoose.connect(MONGO_DB_URL, {useNewUrlParser:true})

    mongoose.connection.on('connected', ()=>{
        console.log('database connected successfully')

    })
    mongoose.connection.on('disconnected', ()=> {
        console.log('database disconnected')
    })
    mongoose.connection.on('error',()=>{
        console.log('error while connecting to the database')
    })

}

export default Connection