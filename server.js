import express from 'express';
import * as dotenv from 'dotenv'
import {
    usersRouter,
    usersStudent,
    getmuahang,
    getthanhtoan,
    getweb
} from './routers/index.js'
dotenv.config()
const app= express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/users',usersRouter)
app.use('/students',usersStudent)
app.use('/iphone15',getmuahang)
app.use('/online',getthanhtoan)
app.use('/web',getweb)
app.get('/',(req,res)=>{
    res.send('hellohahaa')
})
const port=process.env.PORT||3000
app.listen(port,async()=>{
    console.log(`listen on port: ${port}`)
})