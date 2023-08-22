import express from 'express';
import Connection from './db.js';
import router from './Routes/route.js';
import cors from 'cors';




const app = express();
app.use(express.json())
app.use(cors());
// app.use(bodyParser.json({extended: true}))
// app.use(bodyParser.urlencoded({extended:true}))


app.use('/',router)
const PORT=8000;

Connection();

app.listen(PORT, ()=> console.log(`server is running successfully at ${PORT}`))
