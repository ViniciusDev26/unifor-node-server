import { type Prisma, type Issue } from '@prisma/client'
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

  async list (params?: ListIssue): Promise<Issue[]> {
    const filters: Prisma.IssueFindManyArgs = {
      include: {
        user: true,
        _count: {
          select: {
            Rate: true
          }
        }
      }
    }

    if (params?.registration) {
      filters.select = {
        user: {
          select: {
            registration: true
          }
        }
      }
      filters.where = {
        user: {
          registration: params.registration
        }
      }
    }

    const issues = await connection.issue.findMany(filters)
    return issues
  }
}
