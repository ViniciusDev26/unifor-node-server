import { connection } from './connection'

interface Rate {
  userId: string
  issueId: string
}

export class RateRepository {
  async create (rate: Rate): Promise<void> {
    await connection.rate.create({
      data: rate
    })
  }

  async registrationAlreadyRated (issueId: string, registration: string): Promise<boolean> {
    const rate = await connection.rate.findFirst({
      where: {
        issueId,
        user: {
          registration
        }
      }
    })

    return !!rate
  }
}
