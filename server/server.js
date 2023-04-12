const express = require('express')
const app = express()

app.get("/", (req, res) => {res.send("Heloo42 World")})

app.listen(3001, () => { console.log('Servidor iniciado na porta 3001') })