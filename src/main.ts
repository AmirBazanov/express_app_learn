import {App} from "./app.js";
import {LoggerService} from "./logger/loggerService";
import {UsersController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exception.filter";

async function bootstrap() {
    const logger = new LoggerService()
    const app = new App(logger, new UsersController(logger), new ExceptionFilter(logger));
    await app.init()
}

bootstrap().then(() => new LoggerService().log("Dep Root Init"));