# Estrategias de Persistencia - TP 2024 - Los Full Stack

Han sido contratados por una empresa de manufactura para desarrollar un sistema interno de gestión de productos. La empresa fabrica una amplia gama de productos tecnológicos que requieren componentes específicos y son producidos por múltiples fabricantes asociados. Actualmente, el proceso de gestión de esta información es manual y está descentralizado, lo que genera demoras y problemas en la producción. La empresa busca automatizar y centralizar estos datos mediante un sistema web eficiente que permita gestionar los productos, fabricantes y componentes de manera integrada.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Rutas de la API](#rutas-de-la-api)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación

Seguí estos pasos para instalar las dependencias del proyecto:

1. Cloná el repositorio:

   ```bash git clone https://github.com/EP-2024C2/tp-ntom-losfullstack.git```

2. Navegá al directorio del proyecto:

    ```bash cd tp-ntom-losfullstack```

3. Instalá las dependencias:

    ```bash npm install```

## Configuración

Configurá la base de datos y otros parámetros necesarios:

1. Creá un archivo .env en la raíz del proyecto y agregá las siguientes variables de entorno:
    ```
    PORT=3001
    DB_DIALECT=mysql
    DB_HOST=localhost
    DB_NAME=sequelize
    DB_USER=root
    DB_PASSWORD=
    ```

2. Asegurate de que tu base de datos esté en ejecución y configurada correctamente.

## Uso

Seguí estos pasos para ejecutar el proyecto:

1. Iniciá el servidor:

```bash npm start```

2. Abrí Postman o la herramienta de API que uses y probá las rutas de la API.

## Rutas de la API

Acá tenés una lista de las rutas del proyecto listas para probar en tu herramienta de API:

### Productos

* Obtener todos los productos
    - Método: GET
    - URL: http://localhost:3001/productos

* Obtener un producto por ID
    - Método: GET
    - URL: http://localhost:3001/productos/:id

* Agregar un nuevo producto
    - Método: POST
    - URL: http://localhost:3001/productos
    - Cuerpo (Body):
    ```json
        {
        "nombre": "Nuevo Producto",
        "descripcion": "Descripción del nuevo producto",
        "precio": 100,
        "pathImg": "ruta/a/la/imagen.jpg"
        }
    ```

* Modificar un producto por ID
    - Método: PUT
    - URL: http://localhost:3001/productos/:id
    - Cuerpo (Body):
    ```json
    {
    "nombre": "Producto Actualizado",
    "descripcion": "Descripción actualizada",
    "precio": 150,
    "pathImg": "ruta/a/la/imagen_actualizada.jpg"
    }
    ```

* Eliminar un producto por ID
    - Método: DELETE
    - URL: http://localhost:3001/productos/:id

* Crear un producto con fabricante
    - Método: POST
    - URL: http://localhost:3001/productos/:id/fabricantes
    - Cuerpo (Body):
    ```json
    {
    "nombreFabricante": "Nombre del Fabricante",
    "direccion": "Dirección del Fabricante"
    }
    ```

* Obtener fabricantes de un producto por ID
    - Método: GET
    - URL: http://localhost:3001/productos/:id/fabricantes

* Crear un producto con componentes
    - Método: POST
    - URL: http://localhost:3001/productos/:id/componentes
    - Cuerpo (Body):
    ```json
    {
    "nombreComponente": "Nombre del Componente",
    "descripcion": "Descripción del Componente"
    }
    ```

* Obtener componentes de un producto por ID
    - Método: GET
    - URL: http://localhost:3001/productos/:id/componentes

## Resumen de URLs

1. Obtener todos los productos: GET ```http://localhost:3001/productos```
2. Obtener un producto por ID: GET ```http://localhost:3001/productos/:id```
3. Agregar un nuevo producto: POST ```http://localhost:3001/productos```
4. Modificar un producto por ID: PUT ```http://localhost:3001/productos/:id```
5. Eliminar un producto por ID: DELETE ```http://localhost:3001/productos/:id```
6. Crear un producto con fabricante: POST ```http://localhost:3001/productos/:id/fabricantes```
7. Obtener fabricantes de un producto por ID: GET ```http://localhost:3001/productos/:id/fabricantes```
8. Crear un producto con componentes: POST ```http://localhost:3001/productos/:id/componentes```
9. Obtener componentes de un producto por ID: GET ```http://localhost:3001/productos/:id/componentes```

### Fabricantes

* Obtener todos los fabricantes
    - Método: GET
    - URL: http://localhost:3001/fabricantes

* Obtener un fabricante por ID
    - Método: GET
    - URL: http://localhost:3001/fabricantes/:id

* Agregar un nuevo fabricante
    - Método: POST
    - URL: http://localhost:3001/fabricantes
    - Cuerpo (Body):
    ```json
    {
    "nombre": "Nuevo Fabricante",
    "direccion": "Dirección del nuevo fabricante"
    }
    ```

* Modificar un fabricante por ID
    - Método: PUT
    - URL: http://localhost:3001/fabricantes/:id
    - Cuerpo (Body):
    ```json
    {
    "nombre": "Fabricante Actualizado",
    "direccion": "Dirección actualizada"
    }
    ```

* Eliminar un fabricante por ID
    - Método: DELETE
    - URL: http://localhost:3001/fabricantes/:id

* Obtener productos de un fabricante por ID
    - Método: GET
    - URL: http://localhost:3001/fabricantes/:id/productos

## Resumen de URLs

1. Obtener todos los fabricantes: GET ```http://localhost:3001/fabricantes```
2. Obtener un fabricante por ID: GET ```http://localhost:3001/fabricantes/:id```
3. Agregar un nuevo fabricante: POST ```http://localhost:3001/fabricantes```
4. Modificar un fabricante por ID: PUT ```http://localhost:3001/fabricantes/:id```
5. Eliminar un fabricante por ID: DELETE ```http://localhost:3001/fabricantes/:id```
6. Obtener productos de un fabricante por ID: GET ```http://localhost:3001/fabricantes/:id/productos```

### Componentes

* Obtener todos los componentes
    - Método: GET
    - URL: http://localhost:3001/componentes

* Obtener un componente por ID
    - Método: GET
    - URL: http://localhost:3001/componentes/:id

* Agregar un nuevo componente
    - Método: POST
    - URL: http://localhost:3001/componentes
    - Cuerpo (Body):

```json 
    {
    "nombre": "Nuevo Componente",
    "descripcion": "Descripción del nuevo componente",
    "precio": 100,
    "pathImg": "ruta/a/la/imagen.jpg"
    } 
```

* Actualizar un componente por ID
    - Método: PUT
    - URL: http://localhost:3001/componentes/:id
    - Cuerpo (Body):

```json 
    {
    "nombre": "Componente Actualizado",
    "descripcion": "Descripción actualizada",
    "precio": 150,
    "pathImg": "ruta/a/la/imagen_actualizada.jpg"
    }
```

* Eliminar un componente por ID
    - Método: DELETE
    - URL: http://localhost:3001/componentes/:id

* Obtener productos de un componente por ID
    - Método: GET
    - URL: http://localhost:3001/componentes/:id/productos

## Resumen de URLs

1. Obtener todos los componentes: GET ```http://localhost:3001/componentes```
2. Obtener un componente por ID: GET ```http://localhost:3001/componentes/:id```
3. Agregar un nuevo componente: POST ```http://localhost:3001/componentes```
4. Modificar un componente por ID: PUT ```http://localhost:3001/componentes/:id```
5. Eliminar un componente por ID: DELETE ```http://localhost:3001/componentes/:id```
6. Obtener productos de un componente por ID: GET ```http://localhost:3001/componentes/:id/productos```

## Estructura del Proyecto

Explicación breve de la estructura del proyecto y la función de cada directorio:

```
/src
  /controllers   # Controladores de la aplicación
  /middlewares   # Middlewares para validaciones y autenticación
  /models        # Modelos de la base de datos
  /routes        # Definición de las rutas de la API
  /schemas       # Esquemas de validación
  /config        # Configuración de la base de datos y otros parámetros
  app.js         # Archivo principal de la aplicación
```
