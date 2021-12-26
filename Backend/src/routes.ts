import { Router } from 'express';

import ProdutoController from './controllers/ProdutoController';
import CategoriaController from './controllers/CategoriaController';

const routes = Router();

routes.get('/produtos', ProdutoController.list);
routes.get('/produtos/:id_product', ProdutoController.find);


routes.get('/categorias', CategoriaController.list);
routes.get('/categorias/:id_category', CategoriaController.findByCategory);




export default routes;