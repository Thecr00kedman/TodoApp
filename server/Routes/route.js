import { Router } from "express";
import { addTodo, getalltodo, marktododone , updatealltodo, deleteTodos } from '../usercontroller/controller.js'


const router = Router();

router.post('/add', addTodo)
router.get('/all',getalltodo)
router.get('/done/:id',marktododone)
router.put('/update/:id',updatealltodo)
router.delete('/delete/:id', deleteTodos)


export default router