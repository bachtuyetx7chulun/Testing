import express, { Application, Express } from 'express'
import endPoints from 'express-list-endpoints'
import logger from 'morgan'
import { json, urlencoded } from 'body-parser'
import { PORT } from './configs'
import apiRouter from './routers'
import { getError, handleError } from './middleware/error.middlware'

export class App {
  private app: Express
  constructor(private port?: number | string) {
    this.app = express()
    this.configure()
  }

  private configure(): void {
    this.app.set('port', this.port || PORT || 5000)
    this.app.use(logger('dev'))
    this.app.use(json())
    this.app.use(urlencoded({ extended: false }))
    this.app.use('/api/v1', apiRouter)
    this.app.use(getError)
    this.app.use(handleError)
  }

  public listen(): void {
    this.app.listen(this.app.get('port'), (): void => {
      console.log(`Server is running on port ${this.app.get('port')}`)
      console.log(endPoints(this.app))
    })
  }
}
