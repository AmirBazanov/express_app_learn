import {LoggerService} from "./logger/loggerService";
import {Container} from "inversify";
import {ILogger} from "./logger/logger.interface";
import {TYPES} from "./types";
import {ExceptionFilter} from "./errors/exception.filter";
import {UsersController} from "./users/users.controller";
import {App} from "./app";
import {IExceptionFilter} from "./errors/exception.filter.interface";


const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService)
appContainer.bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter)
appContainer.bind<UsersController>(TYPES.UserController).to(UsersController)
appContainer.bind<App>(TYPES.Application).to(App)

const app = appContainer.get<App>(TYPES.Application)
app.init().then();

 
export {app, appContainer}