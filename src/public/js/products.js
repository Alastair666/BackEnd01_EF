// Recuperando usuario almacenado
async function getUser() {
    return JSON.parse(localStorage.getItem("userEF")) ?? []
}
// Recuperando usuario almacenado
async function getUserCart() {
    return JSON.parse(localStorage.getItem("cartUser")) ?? []
}
// Recuperando Carrito de Usuario desde BD
async function getUserCartBD(user) {
    let msj = '', retorno = true, value = {}
    try {
        const response = await fetch(`/api/carts/${user._id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //Validando Respuesta
        const jsonRes = await response.json()
        if (response.ok){
            if (jsonRes.result === "success"){
                value = jsonRes.payload
            }
            else {
                msj = `Get User-Cart Errors: ${jsonRes.errors}`
                retorno = false
            }
        }
    }
    catch (error){
        console.error(`Create User-Cart Errors: ${error}`)
        msj = `Create User-Cart Errors: ${error}`
        retorno = false
    }
    
    if (retorno)
        return { result: "success", payload: value }
    else
        return { result: "error", errors: msj }
}

// Gestionando Carrito por Usuario
async function manageCart() {
    const user = await getUser()
    if (!user || user.length == 0)
        location.href = "/"
    else {
        try {
            const cart = await getUserCartBD(user)
            if (cart.result === "success"){
                localStorage.removeItem("cartUser")
                localStorage.setItem("cartUser", JSON.stringify(cart.payload))
            }
            else {
                const createCart = await fetch(`/api/carts`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user: user._id })
                })
                //Validando Respuesta
                const jsonCreate = await createCart.json()
                if (createCart.ok){
                    if (jsonCreate.result === "success"){
                        await manageCart()
                    }
                    else
                        console.error(`Create User-Cart Errors: ${jsonCreate.errors}`)
                }
                else {
                    console.error(`Create User-Cart Errors: ${jsonCreate.errors}`)
                    alert(`Create User-Cart Errors`)
                }
            }
        }
        catch (error) {
            console.error(`Manage User-Cart Errors: ${error}`)
        }
    }
}
manageCart()


const botonesAgregar = document.querySelectorAll("button.btn-add-confirm")
if (botonesAgregar) {
    for (let btn of botonesAgregar){
        //Añadiendo evento de eliminación
        btn.addEventListener("click", async(event)=>{
            event.preventDefault()
            const cart = await getUserCart()
            if (!cart) {
                alert(`There's no User-Cart`)
            }
            else {
                
                try {
                    const idProd = btn.id
                    if (idProd != null){
                        //Definiendo opciones
                        const opciones = {
                            method: "PUT"
                        };
                        //Consumiendo EndPoint
                        const response = await fetch(`/api/carts/${cart._id}/product${idProd}`, opciones)
                        const jsonRes = await response.json()
                        if (response.ok){
                            if (jsonRes.result === "success"){
                                await manageCart()
                            }
                        }
                    }
                }
                catch (error) {
                    console.error(`Add Product to Cart error: ${error}`)
                }
            }
        })
    }
}