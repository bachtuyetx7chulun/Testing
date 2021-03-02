import { Request, Response, NextFunction, Router } from 'express'
import { getUsers } from '../controllers/user.controller'

const router = Router()
router.get(
  '/',
  (req: Request, res: Response, next: NextFunction): Response => {
    return res.status(200).json({
      code: 200,
      message: 'WellCome to Test API',
    })
  }
)

router.get('/user', getUsers)

export default router
