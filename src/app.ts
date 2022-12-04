import express, {Express} from 'express'
import {Server} from 'http'
import {userRouter} from "./users/users.js";
import {LoggerServes} from "./logger/logger.serves";

export class App{
    app: Express;
    server: Server;
    port: number;

    constructor(logger: LoggerServes) {
        this.app = express();
        this.port = 8000;
    }

    useRoute(){
        this.app.use('/users', userRouter);
    }
    
    public async init() {
        this.useRoute();
        this.server = this.app.listen(this.port);
        console.log("Server runs on localhost:8000")
    }
}