import express from 'express';
import { sequelize } from "./database/connect.js"

const app = express();

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());
// Conectar a la base de datos
await sequelize.authenticate();
// Ruta GET
app.get('/', (req, res) => {
    res.json({ message: 'Éxito ...' });
});

// Ruta para ejemplo de API
app.get('/api', (req, res) => {
    res.json({ message: 'Bienvenido a la API ORM' });
});

// Definir puerto y hacer que el servidor escuche en él
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo sobre el puerto ${PORT}`);
});