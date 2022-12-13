import {App} from "./app.js";
import {LoggerService} from "./logger/loggerService";
import {UsersController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exception.filter";


const logger = new LoggerService()

async function bootstrap() {
    const app = new App(logger, new UsersController(logger), new ExceptionFilter(logger));
    await app.init()
}

bootstrap().then(() => logger.log("Dep Root Init"));