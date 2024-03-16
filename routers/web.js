import express from 'express'
const router= express.Router()
router.get('/trangchu',(req,res)=>{
    res.send('trang chu')
})
export default router