const express = require('express');
const router = express.Router();
const userRouter = require('./user.router')

//los de arriba son las importaciones de los archivos

// mientras que aqui coloco las rutas aquí
router.use(userRouter)


module.exports = router;