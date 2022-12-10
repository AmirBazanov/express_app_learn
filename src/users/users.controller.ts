import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/loggerService";
import {NextFunction, Request, Response} from "express";
import {HttpError} from "../errors/http-error.class";

export class UsersController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger)
        this.bindRoutes([
            {path: '/register', method: "post", func: this.register},
            {path: '/login', method: "post", func: this.login}
        ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        // this.ok(res, 'login')
        next(new HttpError(401, "Login error", 'login'))
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register')
    }

}