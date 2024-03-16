import express from 'express'
const router= express.Router()
router.get('/',(req,res)=>{
    res.send('Get student')
})
router.get('/:id',(req,res)=>{
    res.send('get by students id: '+ req.params.id)
})
router.post('/insert',(req,res)=>{
    res.send('post insert students')
    console.log(req.body)
})
export default router