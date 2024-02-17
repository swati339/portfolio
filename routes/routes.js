import express from 'express';
import {homeController, contactUserController} from '../controller/homeController.js';
const routes = express.Router();


routes.get('/', homeController)
routes.post('/', contactUserController)

export default routes;