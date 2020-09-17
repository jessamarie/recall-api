import { OK, BAD_REQUEST, NOT_FOUND } from 'http-status-codes';
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Logger } from '@overnightjs/logger';

@Controller('')
export class CoreController {

    /*
  The most common codes to use for any HTTP request are:
    200 — OK
    404 — Not found
    500 — Internal Server Error
    One can then expand to a more detailed set of statuses if required, such as:
    201 — Created
    204 — No Content
    304 — Modified
    400 — Bad Request
    401 — Unauthorized
    403 — Forbidden
    501 — Not Implemented
*/

  @Get('*')
    private notFound(req: Request, res: Response) {
        const error = { error: true, message: 'Check your URL please', url: req.originalUrl };
        Logger.Info(`${error.message} ${error.url}`);
        res.status(NOT_FOUND).json(error);
    }

    // private fail(res: Response, error: Error | string) {
    //   console.log(error);
    //   res.status(500).json({
    //     message: 'internal server error',
    //     error: error.toString()
    //   })
    // }

}

