import { Sequelize } from 'sequelize-typescript'
import { getOption } from '../configs/options'
const sequelize = new Sequelize(
  getOption('DEV', {
    models: [__dirname + '/models'],
  })
)

export { sequelize }
