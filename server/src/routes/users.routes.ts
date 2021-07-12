import { Router } from 'express';
import UserController from '../app/controllers/UserController';
import userCreateSchema from '../app/validations/userCreateValidate';
import validation from '../middlewares/validationMiddleware';

const routesUsers = Router();

routesUsers.post('/', validation(userCreateSchema), UserController.create);
routesUsers.get('/', UserController.index);
routesUsers.get('/:id', UserController.show);
routesUsers.put('/:id', UserController.update);
routesUsers.delete('/:id', UserController.destroy);

export default routesUsers;
