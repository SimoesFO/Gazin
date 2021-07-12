import { Router } from 'express';
import DeveloperController from '../app/controllers/DeveloperController';

const routesDevs = Router();

routesDevs.post('/', DeveloperController.create);
routesDevs.get('/', DeveloperController.index);
routesDevs.get('/:id', DeveloperController.show);
routesDevs.put('/:id', DeveloperController.update);
routesDevs.delete('/:id', DeveloperController.destroy);

export default routesDevs;
