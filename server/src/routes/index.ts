import { Router } from 'express';
import routesDevs from './developers.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Its working!');
});

routes.use('/api/v1/developers', routesDevs);

export default routes;
