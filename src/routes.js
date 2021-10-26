import { Router } from 'express';
import { CarController } from './controllers/CarController';

const carController = new CarController();

const routes = Router();

routes.post('/car', carController.createCar);
routes.get('/car', carController.getAllCars);
routes.get('/car/:id', carController.getCarById);
routes.put('/car/edit/:id', carController.editCarById);

export default routes;

