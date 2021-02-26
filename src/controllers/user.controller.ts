import { Request, Response, NextFunction } from 'express'
export let users: Array<string> = []
const getUsers = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  return res.status(200).json({
    code: 200,
    data: users,
  })
}

export { getUsers }
