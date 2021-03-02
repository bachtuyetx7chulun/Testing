import { Request, Response, NextFunction } from 'express'
import User from '../database/models/user.model'

const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const users = await User.findAll()
    return res.status(200).json({
      code: 200,
      data: users,
    })
  } catch (error) {
    next(error)
  }
}

export { getUsers }
