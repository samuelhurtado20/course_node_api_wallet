process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.APP_ENV = process.env.APP_ENV || 'production'

import * as express from "express";
import * as dotenv from 'dotenv'
import { TestService } from "./services/test.service";
import { container } from "./container";

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
})
console.log(process.env.CONN)

const app =  express();

app.get('/', (_req, res)=>{
    res.sendStatus(400)
})

const testService = container.resolve<TestService>('testService')
console.log(testService.get())

export { app }
