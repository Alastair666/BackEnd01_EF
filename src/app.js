import express from "express"
import mongoose, { mongo } from "mongoose"
import handlebars from "express-handlebars"
import viewsRouter from "./routes/views.route.js"
// Importar __DIRNAME
import __dirname from "./utils.js" //Configuración Inicial

// Configuración Inicial
const app = express()
const PORT = 8080

// Configurando Middlewares para endpoints
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configurar Handlebars para lectura de contenido de los endpoints
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
// Utilizar recursos estaticos
app.use(express.static(__dirname + '/public'))

// Configurando Conexión con mongo db utilizando mongoose
mongoose.connect("mongodb+srv://alastairblackwell:3lLd35UcActsfMLZ@cluster0.hprwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database connection succesful")
})
.catch(error=>{
    console.error("Error connecting to database", error)
})

// Enlazando rutas para endpoints
app.use("/", viewsRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})