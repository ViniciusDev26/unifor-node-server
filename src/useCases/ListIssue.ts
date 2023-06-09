import { type Issue } from '@prisma/client'
import { type IssueRepository } from '../repositories/ReportIssueRepository'

interface ListIssueParams {
  registration?: string
}

export class ListIssue {
  constructor (
    private readonly issueRepository: IssueRepository
  ) {}

  async execute (params: ListIssueParams): Promise<Issue[]> {
    const issues = await this.issueRepository.list(params)

    return issues
  }
}
