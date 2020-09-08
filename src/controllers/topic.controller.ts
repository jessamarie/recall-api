import { Request, Response, NextFunction } from 'express';
import { TopicService } from '../services/topic.service'
import { ITopic } from '../models/topic.model';
import { Controller, Get } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { OK } from 'http-status-codes';

@Controller('api/topics')
export class TopicController {
  private topicService: TopicService = new TopicService();


  @Get('')
  private getAll(req: Request, res: Response) {
    this.topicService.getAll().then((topics) => {
      res.status(OK).json(topics);
    }).catch(error => Logger.Err(error))

  }

  @Get(':topicId')
  private get(req: Request, res: Response) {
    this.topicService.getTopic(req.params.topicId)
      .then((topic: ITopic | null) => res.status(OK).json(topic))
      .catch(error => Logger.Err(error))
  }
}



