import cors from 'cors';
import express, { Express } from 'express';
import 'express-async-errors';
import createConnection from "./typeorm";
import { router } from './routes/index.routes'

const port = process.env.PORT;
const app: Express = express();

createConnection();

app.use(
  cors({
    origin: '*',
    methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    allowedHeaders: '*',
  })
);
app.use(express.json({ limit: '200mb' }), router);
app.listen(process.env.PORT, () => {  
  console.log('Server running! Port:', process.env.PORT);
});

export { app };
