import express from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import mongoose, { Mongoose } from 'mongoose';
import config from './environment';
import Logger from 'jet-logger';
import { Server } from '@overnightjs/core';
import { CoreController } from '../controllers/core.controller';
import { TopicController } from '../controllers/topic.controller';

class RecallServer extends Server {

    public mongoUrl = config.mongoDB.url;

    constructor() {
        super(process.env.NODE_ENV === 'development'); // setting showLogs to true

        this.setupMiddleware();
        this.connectDB();
        this.setupControllers();
    }

    private setupMiddleware(): void {
        this.app.use(helmet());
        this.app.use(cors({
            origin: ['http://localhost:3000', 'https://jessamarie.github.io/recall/', 'https://jessamarie.github.io'], // * (wildcard) permits any origin
            optionsSuccessStatus: 200,
            credentials: true // pass the Access-Control-Allow-Credentials CORS header
        }));        
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private setupControllers() {
        const coreController = new CoreController();
        const topicController = new TopicController();

        // super.addControllers() must be called, and can be passed a single controller or an array of 
        // controllers. Optional router object can also be passed as second argument.
        super.addControllers(
            [topicController, coreController],
            /*, optional router here*/
            /* middleware that will apply to all controllers here */
        );
    }

    private connectDB(): void {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
            .then(
                (conn: Mongoose) => { Logger.Imp(`Database ${conn.connections[0].name} is ready on ${conn.connections[0].host}`); },
                err => { Logger.Err(err); }
            );
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp(`Server listening on port: ${port}`);
        });
    }

}

export default RecallServer;