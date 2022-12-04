import {App} from "./app.js";
import {LoggerServes} from "./logger/logger.serves";

async function bootstrap(){
    const app = new App(new LoggerServes());
    await app.init()
}

bootstrap();