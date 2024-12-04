const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql', // Ou 'postgres' para PostgreSQL
});

module.exports = sequelize;

const sequelize = require('./src/config/database');

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida!'))
    .catch(err => console.error('Erro ao conectar no banco de dados:', err));

