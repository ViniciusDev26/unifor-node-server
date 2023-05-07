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
}
