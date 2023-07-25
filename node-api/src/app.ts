import { hello } from './controllers/controllers';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', hello)

export default app;