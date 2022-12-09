import {App} from "./app.js";
import {LoggerService} from "./logger/loggerService";
import {UsersController} from "./users/users.controller";

async function bootstrap() {
    const logger = new LoggerService()
    const app = new App(logger, new UsersController(logger));
    await app.init()
}

bootstrap();