import {NextFunction, Request, Response} from "express";
import {IExceptionFilter} from "./exception.filter.interface";
import {HttpError} from "./http-error.class";
import {ILogger} from "../logger/logger.interface";

export class ExceptionFilter implements IExceptionFilter {
    logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction) {
        if (err instanceof HttpError) {
            this.logger.error(`[${err.context}] Error:${err.statusCode} ${err.message}`);
            res.status(err.statusCode).send(err.message)
        } else {
            this.logger.error(`${err.message}`);
            res.status(500).send(err.message)
        }
    }
}