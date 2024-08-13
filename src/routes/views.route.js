import express from "express"
import { body, validationResult } from "express-validator"
import productsModel from "../models/product.model.js"

const router = express.Router()

// Ruta que no debería estar acá
router.get("/", (req,res)=>{
    res.render('index')
})

/*********************** PRODUCTOS ***********************/
/** GET 
 * Deberá de traer todos los productos de la base (Incluyendo la limitación ?limit del desafio)
 * **/
router.get("/products", async (req,res)=>{
    let sort = parseInt(req.query.sort)
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit)
    if (!page) page = 1;
    let result = await productsModel.paginate({}, { page, limit: 5, lean: true })
    if (!result) {
        
    }

    res.render('products', result)
})


/** Carts **/
router.get("/carts", (req,res)=>{
    res.render('index')
})


// Exportando 
export default router