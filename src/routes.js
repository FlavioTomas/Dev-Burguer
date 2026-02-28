// biome-ignore assist/source/organizeImports: imports are organized by type
import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.cjs';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import authMiddleware from './middlewares/auth.js';
import ProductController from './app/controllers/ProductController.js';
import CategoryController from './app/controllers/CategoryController.js';
import adminMiddleware from './middlewares/admin.js';


const routes = new Router();

const upload = multer(multerConfig)

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware)
routes.post('/products', adminMiddleware, upload.single('file'), ProductController.store)
routes.put('/products/:id', adminMiddleware, upload.single('file'), ProductController.update)
routes.get('/products', ProductController.index)

routes.post('/categories', adminMiddleware, CategoryController.store)
routes.get('/categories', CategoryController.index)



export default routes