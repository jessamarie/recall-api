import { StatusCodes } from 'http-status-codes';
import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Logger } from '@overnightjs/logger';

@Controller('')
export class CoreController {

  @Get('*')
    private notFound(req: Request, res: Response) {
        const error = { error: true, message: 'Check your URL please', url: req.originalUrl };
        Logger.Info(`${error.message} ${error.url}`);
        res.status(StatusCodes.NOT_FOUND).json(error);
    }

}

