import express, {Express} from 'express'
import {Server} from 'http'
import {LoggerService} from "./logger/loggerService";
import {UsersController} from "./users/users.controller";

export class App {
    app: Express;
    server: Server;
    port: number;
    userController: UsersController;
    logger: LoggerService;

    constructor(logger: LoggerService, userController: UsersController) {
        this.app = express();
        this.port = 8000;
        this.userController = userController
        this.logger = logger;
    }

    useRoute() {
        this.app.use('/users', this.userController.router);
    }

    useExceptionFilters() {

    }


    public async init() {
        this.useRoute();
        this.useExceptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server runs on http://localhost:${this.port}`)
    }
}