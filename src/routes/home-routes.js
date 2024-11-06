import { Router } from 'express'
import homeController from '../controllers/Home-controller'

const router = new Router()

router.get('/', homeController.index) 

export default router