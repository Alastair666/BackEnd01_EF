import express from "express"
import productsModel from "../models/product.model.js"

const router = express.Router()

// Ruta que no debería estar acá
router.get("/", (req,res)=>{
    res.render('index')
})

/*********************** PRODUCTS ***********************/
/** GET 
 * Deberá de traer todos los productos de la base (Incluyendo la limitación ?limit del desafio)
 * **/
router.get("/products", async (req,res)=>{
    try {
        // Determinando URI sin importar el servidor donde se encuentre
        const mainURI = `${req.protocol}://${req.get('host')}${req.originalUrl}`
        let url = mainURI.split("?")
        let uri = url[0]
        // Definiendo filtros y opciones
        const filtros = {}, opciones = {}
        const { limit = 10, page = 1, sort, status = true } = req.query
        // Filtros
        if (status)
            filtros.status = status
        // Opciones
        opciones.limit = limit
        opciones.page = page
        if (!sort)
            opciones.sort = "asc"
        opciones.lean = true

        // Obteniendo datos de BD
        let retorno
        let result = await productsModel.paginate(filtros, opciones)
        if (result) {
            retorno = {
                status: "success",
                payload: result.docs,
                totalPages: result.totalDocs,
                prevPage: result.prevPage,
                nextPage: result.nextPage,
                page: result.page,
                hasPrevPage: result.hasPrevPage,
                hasNextPage: result.hasNextPage,
                prevLink: result.hasPrevPage ? `${uri}?page=${result.prevPage}` : "",
                nextLink: result.hasNextPage ? `${uri}?page=${result.nextPage}` : ""
            }
        }
        else {
            retorno = {
                status: "error",
                payload: {},
                totalPages: 0,
                prevPage: "",
                nextPage: "",
                page: 0,
                hasPrevPage: false,
                hasNextPage: false,
                prevLink: "",
                nextLink: ""
            }
        }
        //res.status(200).json(retorno)
        res.render('products', retorno)
    }
    catch (error) {
        res.status(400).json({ status: "error", payload: null, errors: error })
    }
    
})


/** Carts **/
router.get("/carts", (req,res)=>{
    res.render('index')
})


/*********************** CARTS ***********************/


// Exportando 
export default router