import express from 'express'
const router= express.Router()
router.get('/iphone',(req,res)=>{
    res.send('mua hang')
})
export default router