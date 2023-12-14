const express = require('express')
const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render( 'products/index');
});

app.get('/carrito', (req,res)=>{
    res.render('products/carritodecompras');
});

app.get('/login', (req,res) => {
    res.render('users/login');
});

app.get('/registro', (req,res) => {
    res.render('users/registro');
});

app.get('/detalle-producto', (req, res) => {
    res.render( 'products/detalleProducto');
});
app.get('/admProducto', (req, res) => {
    res.render( 'products/admProductos');
});

app.listen(3001, () => {
    console.log('Servidor iniciado correctamente');
});
