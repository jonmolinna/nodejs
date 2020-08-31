import express, {json} from 'express';

const app = express();

// Importandos Rutas
import IndexRoutes from './routes/index.routes';
import TaskRoutes from './routes/tasks.routes';

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(json()); //maneja los formatos json que envia el cliente

// Routes
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);

export default app;