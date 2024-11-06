import { Router } from 'express'
import homeController from '../controllers/Home-controller'
import User from '../models/User'
const router = new Router()

router.get('/', homeController.index)

router.get('/test', async (req, res) => {
    try {
        const users = await User.find().limit(1); 
        res.status(200).json({
            message: 'Conexão com o banco de dados está funcionando!',
            users: users,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Erro ao acessar o banco de dados',
            error: err.message,
        });
    }
});

export default router