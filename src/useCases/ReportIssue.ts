import { type IssueRepository } from '../repositories/ReportIssueRepository'
import { type UserRepository } from '../repositories/UserRepository'

export interface ReportIssueParams {
  topic: string
  detail: string
  registration: string
}

export class ReportIssue {
  constructor (
    private readonly userRepository: UserRepository,
    private readonly issueRepository: IssueRepository
  ) {}

  async execute (params: ReportIssueParams): Promise<void> {
    const user = await this.userRepository.findOrCreate(params.registration)
    await this.issueRepository.create({
      topic: params.topic,
      detail: params.detail,
      userId: user.id
    })
  }
}
