import 'express-async-errors';
import express, {Application, json} from 'express';
import { handleError } from './AppError';
import { moviesRoutes } from './routes';


const app: Application = express()

app.use(json())

app.use('/movies', moviesRoutes)

app.use(handleError)

export default app
