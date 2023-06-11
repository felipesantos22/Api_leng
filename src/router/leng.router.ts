import express from 'express';

const routerLeng = express.Router();

routerLeng.get('/', () => {
    console.log('Api com prisma e postgres');
});

export default routerLeng;