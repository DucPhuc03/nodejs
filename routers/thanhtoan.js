import express from 'express'
const router= express.Router()
router.get('/card',(req,res)=>{
    res.send('thanh toan')
})
export default router