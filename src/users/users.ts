import express, {NextFunction, request, Request, Response} from 'express'

export const userRouter = express.Router();

userRouter.use((req:Request, res:Response, next:NextFunction)=>{
    console.log("Handler users");
    next();
});

userRouter.post('/login', (req, res)=>{
   res.send('login')
});

userRouter.post('/register', (req, res)=>{
    res.send('register')
});