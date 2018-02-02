import * as Express from 'express';

// `helloWorld` - Emits a JSON response of the shape `{ message: 'Hello, world!' }`.
export const helloWorld = (req: Express.Request, res: Express.Response): Express.Response =>
  res.send({ message: 'Hello, world!' });