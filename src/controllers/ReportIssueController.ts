/* eslint-disable @typescript-eslint/no-extraneous-class */
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { ReportIssue } from '../useCases/ReportIssue'
import { UserRepository } from '../repositories/UserRepository'
import { IssueRepository } from '../repositories/ReportIssueRepository'

interface RequestFormat {
  Body: {
    topic: string
    detail: string
    registration: string
  }
}

export class ReportIssueController {
  static async handle (request: FastifyRequest<RequestFormat>, response: FastifyReply): Promise<void> {
    const { topic, detail, registration } = request.body

    const userRepository = new UserRepository()
    const issueRepository = new IssueRepository()
    const useCase = new ReportIssue(userRepository, issueRepository)
    await useCase.execute({
      topic,
      detail,
      registration
    })

    void response.code(201).send()
  }
}
