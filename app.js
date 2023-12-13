const express = require('express')
const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render( 'products/index.ejs');
});

app.get('/carrito', (req,res)=>{
    res.render('products/carritodecompras.ejs');
});

app.get('/login', (req,res) => {
    res.render('users/login.ejs');
});

app.get('/registro', (req,res) => {
    res.render('users/registro.ejs');
});

app.get('/detalle-producto', (req, res) => {
    res.render( 'products/detalleProducto.ejs');
});

app.listen(3001, () => {
    console.log('Servidor iniciado correctamente');
});
