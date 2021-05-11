const router = require('express').Router()
const Sequelize = require('sequelize')

const db = require('../db')

const UserSchema = db.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    preco:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


router.get('/', async (req, res) => {
    const produtos = await UserSchema.findAll()
    res.status(200).json(produtos)
})

router.post('/', async(req, res) => {
    await UserSchema.create(req.body)
    res.status(201).send()
})

router.delete('/:id', async(req, res) => {
    let { id } = req.params
    await UserSchema.destroy({where: {id: id}})
    res.send()
})

router.put('/:id', async(req, res) => {
    let {nome, preco, descricao ,estoque }
    let { id } = req.params

    let produto = await UserSchema.findOne({where: {id: id}})

    produto.nome = nome
    produto.preco = preco
    produto.descricao = descricao
    produto.estoque = estoque
})

module.exports = router