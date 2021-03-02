import { IUser } from './../../interface/user.interface'
import {
  Model,
  DataType,
  PrimaryKey,
  Column,
  Default,
  AllowNull,
  CreatedAt,
  DeletedAt,
} from 'sequelize-typescript'

export default class User extends Model implements IUser {
  @PrimaryKey
  @AllowNull(false)
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string

  @AllowNull(false)
  @Column(DataType.STRING)
  userName: string

  @AllowNull(false)
  @Column(DataType.INTEGER)
  age: number

  @AllowNull(false)
  @Column(DataType.STRING)
  phone: string

  @AllowNull(false)
  @Column(DataType.STRING)
  email: string

  @AllowNull(false)
  @Column(DataType.STRING)
  address: string

  @CreatedAt
  @AllowNull(false)
  @Column(DataType.DATE)
  createdAt: Date

  @CreatedAt
  @AllowNull(false)
  @Column(DataType.DATE)
  updatedAt: Date

  @DeletedAt
  @AllowNull(true)
  @Column(DataType.DATE)
  deletedAt: Date
}
