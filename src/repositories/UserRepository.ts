import { type User } from '@prisma/client'
import { connection } from './connection'

export class UserRepository {
  async findOrCreate (registration: string): Promise<User> {
    let user = await connection.user.findFirst({
      where: {
        registration
      }
    })

    if (user == null) {
      user = await connection.user.create({
        data: {
          registration
        }
      })
    }

    return user
  }
}
