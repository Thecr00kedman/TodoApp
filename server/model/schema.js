import mongoose, { model } from "mongoose";


const TodoSchema = mongoose.Schema({

data:{
    type:String,
    required:true
},
done:{
    type:Boolean,
    default:false
},
createdAt:{
    type:Date,
    default:Date.now()
}

})

const Todo = mongoose.model('Todo',TodoSchema)

export default Todo