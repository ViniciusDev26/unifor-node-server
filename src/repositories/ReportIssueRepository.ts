import { connection } from './connection'

interface CreateIssue {
  topic: string
  detail: string
  userId: string
}
interface ListIssue {
  registration?: string
}

export class IssueRepository {
  async create (issue: CreateIssue): Promise<void> {
    await connection.issue.create({
      data: issue
    })
  }

  async list (params?: ListIssue) {
  }
}
