import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definiendo Colección de Carritos
const cartsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    products: {
        type:[
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "products"
                },
                quantity: {type: Number, required: true }
            }
        ],
        default: []
    }
})

// Añadiendo Plugin de paginación
cartsSchema.plugin(mongoosePaginate)
// Exportando modelo de carritos
const productsModel = mongoose.model("carts", cartsSchema)
export default productsModel