const express = require('express');
const cors = require('cors');

const { connectDatabase } = require('./config/datasource');
const UserController = require('./controllers/UserController');

const app = express();
const port = 8000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes (via controllers uniquement)
app.post('/users', UserController.createUser);
app.get('/users', UserController.getUsers);

// Initialisation de la base de données
connectDatabase();

// Démarrage du serveur
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
