<p align="rigth">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>


# Ejecutar en desarrollo

1. clonar el repositorio.

2. Ejecutar.

    ```
    npm install
    ```
3. Tener Nest CLI instalado.

    ```
    npm i -g @nestjs/cli
    ```
4. Levantar la aplicacion

    ~~~
    npm run dev
    ~~~

## Stack  usado
* Nestjs

## Rutas
1. llave secreta
    ```
    GET : http://localhost:3000/decrypted-message

    ```
2. mensaje
    ```
    GET : http://localhost:3000/decrypted-message/<llave secreta>

    ```

  
## Procesos
 1. tenemos los manejdaro de rutas
    ```
    src/decrypted-message/decrypted-message.controller.ts
    ```
    ![alt text](image.png)

   *  findAll(): Este método maneja solicitudes GET a la ruta base (/decrypted-message). Delega la solicitud al método findKey().

   * findOne(@Param('id') id: string): Este método maneja solicitudes GET a una ruta con un parámetro dinámico (/decrypted-message/:id). Utiliza el decorador @Param('id') para extraer el valor del parámetro id de la URL de la solicitud y pasarlo como argumento al método findMessage() 
