import express, {Express} from 'express'
import {Server} from 'http'
import {UsersController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exception.filter";
import {ILogger} from "./logger/logger.interface";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import 'reflect-metadata'

@injectable()
export class App {
    app: Express;
    server: Server;
    port: number;

    constructor(
        @inject(TYPES.ILogger) private logger: ILogger,
        @inject(TYPES.UserController) private usersController: UsersController,
        @inject(TYPES.ExceptionFilter) private exceptionFilter: ExceptionFilter,) {
        this.app = express();
        this.port = 8000;

    }

    useRoute() {
        this.app.use('/users', this.usersController.router);
    }

    useExceptionFilters() {
        this.app.use(this.exceptionFilter.catch.bind(this))
    }


    public async init() {
        this.useRoute();
        this.useExceptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server runs on http://localhost:${this.port}`)
    }
}