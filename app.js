
//módulo nativo path
const path = require ("path");
//requiero el módulo de express (terceros)
const express = require ("express");
console.log(path.resolve("./views/index.html"));

//adentro de app --> aplicación de express
const app = express();
//defino el puerto una vez para usarlo las veces que sea necesario
const port = 3030;

app.use(express.static("public"))

app.get ("/", (req,res) =>{
    //envio el archivo que tengo en la ruta y uso path.resolve para armar la ruta al archivo
    res.sendFile(path.resolve("./views/index.html"))
})
//función para ejecutar el servidor en un puerto específico (+callback)
app.listen(port, () => {
    console.log("estoy escuchando en el puerto", port)
})
app.get('/hamilton',(req, res) =>{
res.sendFile(path.resolve('./views/hamilton.html'))
})

app.get('/babbage',(req, res) =>{
    res.sendFile(path.resolve('./views/babbage.html'))
    })

app.get('/berners-lee',(req, res) =>{
    res.sendFile(path.resolve('./views/berners-lee.html'))
    })
app.get('/clarke',(req, res) =>{
    res.sendFile(path.resolve('./views/clarke.html'))
    })
app.get('/hopper ',(req, res) =>{
        res.sendFile(path.resolve('./views/hopper.html'))
        })
app.get('/lovelace ',(req, res) =>{
        res.sendFile(path.resolve('./views/lovelace.html'))
        })
app.get('/turing',(req, res) =>{
        res.sendFile(path.resolve('./views/turing.html'))
        })