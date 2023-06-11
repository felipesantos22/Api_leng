import express from 'express';
import routerLeng from './leng.router';

const app = express();
app.use(express.json());

app.use(routerLeng);

export default app;