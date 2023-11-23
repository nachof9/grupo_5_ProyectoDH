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

app.listen(3000, () => {
    console.log('Servidor iniciado correctamente')
})
