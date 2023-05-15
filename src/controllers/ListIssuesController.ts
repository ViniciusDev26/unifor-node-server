/* eslint-disable @typescript-eslint/no-extraneous-class */
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { IssueRepository } from '../repositories/ReportIssueRepository'
import { ListIssue } from '../useCases/ListIssue'

interface RequestParams {
  Querystring: {
    registration: string
  }
}

export class ListIssuesController {
  static async handle (request: FastifyRequest<RequestParams>, response: FastifyReply): Promise<void> {
    const { registration } = request.query

    const issueRepository = new IssueRepository()
    const useCase = new ListIssue(issueRepository)
    const issues = await useCase.execute({
      registration
    })

    void response.send(issues)
  }
}
