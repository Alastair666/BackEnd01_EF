import express from "express"
import { body, validationResult } from "express-validator"

const router = express.Router()

// Ruta que no debería estar acá
router.get("/products", (req,res)=>{
    res.render('index')
})

// Exportando 
export default router