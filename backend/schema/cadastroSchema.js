const mongoose = require('mongoose')
const Joi = require('joi');

const cadastroSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    nome: String,
    numero: Number,
    
    email: String,
    mensagem: String
    
    
}, {
    timestamps: true
});

module.exports = mongoose.model('cadastro', cadastroSchema)