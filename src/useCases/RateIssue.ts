import { type RateRepository } from '../repositories/RateRepository'
import { type UserRepository } from '../repositories/UserRepository'

interface RateIssueParams {
  issueId: string
  registration: string
}

export class RateIssue {
  constructor (
    private readonly rateRepository: RateRepository,
    private readonly userRepository: UserRepository
  ) {}

  async execute (params: RateIssueParams): Promise<void> {
    const user = await this.userRepository.findOrCreate(params.registration)

    await this.rateRepository.create({
      userId: user.id,
      issueId: params.issueId
    })
  }
}
