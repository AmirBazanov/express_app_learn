import express, {Express} from 'express'
import {Server} from 'http'
import {LoggerService} from "./logger/loggerService";
import {UsersController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exception.filter";

export class App {
    app: Express;
    server: Server;
    port: number;
    userController: UsersController;
    exceptionFilter: ExceptionFilter;
    logger: LoggerService;

    constructor(logger: LoggerService, userController: UsersController, exceptionFilter: ExceptionFilter) {
        this.app = express();
        this.port = 8000;
        this.userController = userController
        this.logger = logger;
        this.exceptionFilter = exceptionFilter;
    }

    useRoute() {
        this.app.use('/users', this.userController.router);
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