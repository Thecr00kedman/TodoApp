import Todo from "../model/schema.js"



export const addTodo = async(request, response) => {
     

    console.log(request.body)

    try {
        
        const newTodo = await Todo.create({
            data:request.body.data,
            createdAt: Date.now()
        })
       
    
        await newTodo.save();
        return response.status(200).json(newTodo)
        

    } catch (error) {
       return response.status(500).json('error while calling the todo api', error)
        
    }
    
    }
    
    export const getalltodo = async(request,response) => {

        try {
            
           const alltodos =  await Todo.find({}).sort({'createdAt':-1})
           return response.status(200).json(alltodos)
           
        } catch (error) {
            return response.status(500).json('error while calling the getalltodo api', error)
        }

    }

    export const marktododone = async(request,response)=> {

        try {
            
            const todoref = await Todo.findById(request.params.id)
            
         const todo =await Todo.findOneAndUpdate({_id:request.params.id},{ done:!todoref.done})

          return response.status(200).json(todo)

        } catch (error) {
            
            return console.log('error while connecting the mark todo done api', error)
        }

    }
    
    export const updatealltodo = async(request,response)=> {
       
       
        try {
            console.log(request.body)
            
            const todo = await Todo.findByIdAndUpdate(request.params.id,{data:request.body.data})
            await todo.save();
            return response.status(201).json(todo)

            
        } catch (error) {
            
            return response.status(501).json('error while calling the updatealltodo api',error)
        }

    }
    
    
    export const deleteTodos = async(request,response) => {

        try {

            const todo = await Todo.findByIdAndDelete(request.params.id)
            return response.status(201).json(todo)
            
            
        } catch (error) {
            
            return response.status(501).json('error while calling the delete todos  api', error)
        }
    }