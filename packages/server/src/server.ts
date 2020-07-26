import express from 'express';

import BaseRouter from './routes';

// Init express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add APIs
app.use('/api', BaseRouter);

export default app;
