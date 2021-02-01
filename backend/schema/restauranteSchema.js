const mongoose = require('mongoose');


const restauranteSchema = mongoose.Schema({
    _id: String,
    img: String,
    nome: String,
    titulo: String,
    subtitulo: String,
    texto: String,
    link: String
}, {
    timestamps: true
});

module.exports = mongoose.model('restaurante', restauranteSchema);