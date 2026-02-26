// biome-ignore assist/source/organizeImports: imports are organized by type
import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.cjs';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import authMiddleware from './middlewares/auth.js';
import ProductController from './app/controllers/ProductController.js';


const routes = new Router();

const upload = multer(multerConfig)

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware)
routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)

routes.post('/categories', ProductController.store)
routes.get('/categories', ProductController.index)



export default routes