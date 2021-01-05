import {
  Request,
  Response,
  NextFunction
} from 'express';

import {
  NotAuthorizedError
} from '../models';

function RequireAuthorization (
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  next();
}

export default RequireAuthorization;
