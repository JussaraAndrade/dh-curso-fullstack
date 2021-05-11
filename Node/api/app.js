const express = require('express')
const app = express()
const usuariosRouter = require('./usuarios/routes')
const produtosRouter = require('./produtos/routes')

const db = require('./db');

(
    async () => {
        await db.sync()
    }
)()

app.use(express.json())

app.use('/usuarios', usuariosRouter)
app.use('/produtos', produtosRouter)

app.listen(3000, () => {
    console.log('Server rodando na porta 3000')
})



