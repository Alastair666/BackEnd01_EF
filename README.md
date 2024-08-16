# Proyecto Final - Programación Backend I: Desarrollo Avanzado de Backend

## Comisión 70065

## Tabla de Contenidos
1. [Introducción](#instroducción)
2. [Instalación](#instalación)
3. [Estructura](#estructura-del-proyecto)
4. [Endpoint](#endpoints)
5. [Conclusion](#conclusion)

- Introducción
- Instalación
  - Requisitos
  - Instalación de Node.js
  - Instalación de Librerías
- Estructura del Proyecto
- Endpoints
- Conclusión

## Introducción
Este proyecto es la entrega final del curso "Programación Backend I: Desarrollo Avanzado de Backend" de la plataforma Coderhouse. El objetivo del proyecto es desarrollar una aplicación backend utilizando Node.js y varias librerías populares.

## Instalación

### Requisitos
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

### Instalación de Node.js
Para instalar Node.js, sigue estos pasos:

1. Descarga el instalador desde la página oficial de Node.js.
2. Ejecuta el instalador y sigue las instrucciones en pantalla.
3. Verifica la instalación ejecutando los siguientes comandos en tu terminal:
   ```bash
   node -v
   npm -v

### Instalación de Librerías
Una vez que Node.js esté instalado, puedes instalar las librerías necesarias para este proyecto. Ejecuta el siguiente comando en la raíz del proyecto:
    ```sh
    npm install express express-handlebars mongoose mongoose-paginate-v2 express-validation

## Estructura del Proyecto
1. **node_modules/**: Contiene las dependencias del proyecto.
2. **src/**: Carpeta principal del código fuente.
3. **routes/**: Contiene los archivos de rutas.
4. **views/**: Contiene las vistas de la aplicación.
5. **models/**: Contiene los modelos de datos.
6. **data/**: Contiene los archivos de datos.

La estructura del proyecto es la siguiente:
    ```
    BackEnd01_EF/
    ├── node_modules/
    ├── src/
    │   ├── data/
    │   ├── ├── products.json
    │   ├── models/
    │   ├── ├── cart.model.js
    │   ├── ├── product.model.js
    │   ├── ├── user.model.js
    │   ├── public/
    │   ├── ├── js/
    │   ├── ├── ├── carts.js
    │   ├── ├── ├── index.js
    │   ├── ├── ├── products.js
    │   ├── routes/
    │   ├── ├── carts.route.js
    │   ├── ├── products.route.js
    │   ├── ├── users.route.js
    │   ├── ├── views.route.js
    │   ├── views/
    │   ├── ├── layouts/
    │   ├── ├── ├── main.handlebars
    ├── ├── carts.handlebars
    ├── ├── index.handlebars
    ├── ├── products.handlebars
    ├── app.js
    ├── utils.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.md

## Endpoints
A continuación se describen los endpoints disponibles en la aplicación:

### RENDER
Estos son los endpoint principales que proporcionan una interfaz al usuario
- **GET /products**: Vista general de la lista de productos disponibles
- **GET /carts/:cid**: Vista general del carrito en especifico con sus respectivos productos

### STATUS / JSON
- **GET /api/carts/:uid**: Obtiene el carrito de un usuario en especifico


## Conclusiones
Este proyecto demuestra el uso de Node.js y varias librerías para desarrollar una aplicación backend robusta. Si tienes alguna pregunta o necesitas más información, no dudes en contactarme.
    ```
    Este archivo `README.md` proporciona una guía clara y estructurada para la instalación, estructura y uso del proyecto