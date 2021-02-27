import { Request, Response, NextFunction } from 'express'
import { User } from '../interface/user.interface'

const getUsers = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  return res.status(200).json({
    code: 200,
    data: '',
  })
}

export { getUsers }
