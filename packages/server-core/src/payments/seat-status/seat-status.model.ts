import { DataTypes, Model, Sequelize } from 'sequelize'

import { SeatStatusInterface } from '@xrengine/common/src/dbmodels/SeatStatus'

import { Application } from '../../../declarations'

export default (app: Application) => {
  const sequelizeClient: Sequelize = app.get('sequelizeClient')
  const seatStatus = sequelizeClient.define<Model<SeatStatusInterface>>(
    'seat_status',
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      }
    },
    {
      hooks: {
        beforeCount(options: any): void {
          options.raw = true
        }
      },
      timestamps: false
    }
  )

  ;(seatStatus as any).associate = (models: any): void => {
    ;(seatStatus as any).hasMany(models.seat, { foreignKey: 'seatStatus' })
  }

  return seatStatus
}
