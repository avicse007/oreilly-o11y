import { Request, Response } from 'express';

export const hello = (_req: Request, res: Response): void => {
    const data = { message: 'Hello World!'};

    res.status(200).json(data);
}
