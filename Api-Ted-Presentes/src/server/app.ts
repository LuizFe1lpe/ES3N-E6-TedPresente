import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import 'express-async-errors';
import { router } from './index.routes'

dotenv.config();
const port = process.env.PORT;
const app: Express = express();

app.use(
  cors({
    origin: '*',
    methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    allowedHeaders: '*',
  })
);
app.use(express.json({ limit: '200mb' }), router);
app.listen(port, () => {
  console.log('Server running! Port:', port);
});

export { app };
