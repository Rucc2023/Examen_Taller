import dot from 'dotenv';
import express from "express"
import { usuariosRoutes } from './routes/index.ts';


dot.config({ path: '/home/TALLER4O/usuarios/src/.env' });

const app = express()
const port = process.env.PORT


app.get('/', (req, res) => {
    res.send('Ahuevo si funcionó');
});


app.use('/usuarios', usuariosRoutes);


app.listen(port, () => {
    console.log(`Microservicio Usuario en ${port}`);
});