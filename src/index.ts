import express, { Request, Response } from 'express';

const app = express();

app.use('*', (req: Request,res:Response,next) => {
   res.send('Hello')
})

app.listen(3000);