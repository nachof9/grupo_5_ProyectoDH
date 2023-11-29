const express = require('express')
const app = express()
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carritodecompras.html');
});

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.get('/registro', (req,res) => {
    res.sendFile(__dirname + '/views/registro.html')
})

app.get('/detalle-producto', (req, res) => {
    res.sendFile(__dirname + '/views/detalleProducto.html')
})

app.listen(3001, () => {
    console.log('Servidor iniciado correctamente')
})
