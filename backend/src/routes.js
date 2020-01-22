import { Router } from 'express';
import shoppingCartController from './app/controllers/ShoppingCartController';
const routes = new Router();

routes.get('/cartLess', shoppingCartController.indexLess);
routes.get('/cartGreater', shoppingCartController.indexGreater);

export default routes;
