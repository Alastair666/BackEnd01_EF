import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definiendo Colección de Carritos
const cartsSchema = mongoose.Schema({
    cid: {type: Number, required: true },
    products : {
        type: Array,
        default: []
    }
})

// Añadiendo Plugin de paginación
productsSchema.plugin(mongoosePaginate)
// Exportando modelo de carritos
const productsModel = mongoose.model("carts", productsSchema)
export default productsModel