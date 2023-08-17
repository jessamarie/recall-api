import { Request, Response } from 'express';
import { TopicService } from '../services/topic.service';
import { ITopic } from '../models/topic.model';
import { Controller, Get } from '@overnightjs/core';
import Logger from 'jet-logger';
import { StatusCodes } from 'http-status-codes';
import { Error } from 'mongoose';

@Controller('api/topics')
export class TopicController {
  private topicService: TopicService = new TopicService();

  @Get('')
  private getAll(req: Request, res: Response) {
    this.topicService
      .getAll()
      .then((topics) => {
        res.status(StatusCodes.OK).json(topics);
      })
      .catch((error) => Logger.err(error));
  }

  @Get(':topicId')
  private get(req: Request, res: Response) {
    this.topicService
      .getTopic(req.params.topicId)
      .then((topic: ITopic | null) => res.status(StatusCodes.OK).json(topic))
      .catch((error: Error) => this.processError(error, res));
  }

  // TODO: this should be moved to more generic file for future reuse if this api gets larger
  private processError(error: Error, res: Response) {
    console.log(error);
    if (
      error.message &&
      (~error.message.indexOf('Cast to ObjectId failed') ||
        ~error.message.indexOf('not found'))
    ) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'internal server error',
        error: error.stack
      });
    }
  }
}
