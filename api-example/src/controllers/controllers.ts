import otel from "@opentelemetry/api";
import { Request, Response } from 'express';

const myMeter = otel.metrics.getMeter(
  'my-service-meter'
);
const counter = myMeter.createCounter('events.counter');


export const hello = (_req: Request, res: Response): void => {
    counter.add(1)
    const data = { message: 'Hello World!'};

    res.status(200).json(data);
}
