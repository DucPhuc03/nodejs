import express from 'express'
const router= express.Router()
router.get('/',(req,res)=>{
    res.send('Get user')
})
router.post('/login',(req,res)=>{
    res.send('post login')
})
router.post('/register',(req,res)=>{
    res.send('post register')
})
export default router