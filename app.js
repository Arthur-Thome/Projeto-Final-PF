const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configurar middlewares
app.use(cors());
app.use(bodyParser.json());

// Importar rotas
const bookRoutes = require('./src/routes/bookRoutes');
app.use('/books', bookRoutes);

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const sequelize = require('./src/config/database');
sequelize.sync({ force: true }) // Apaga e recria as tabelas
    .then(() => console.log('Tabelas sincronizadas com sucesso!'))
    .catch(err => console.error('Erro ao sincronizar tabelas:', err));

