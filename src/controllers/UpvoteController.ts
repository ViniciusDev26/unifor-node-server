/* eslint-disable @typescript-eslint/no-extraneous-class */
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { RateIssue } from '../useCases/RateIssue'
import { UserRepository } from '../repositories/UserRepository'
import { RateRepository } from '../repositories/RateRepository'

interface RequestParams {
  Body: {
    issueId: string
    registration: string
  }
}

export class UpvoteController {
  static async handle (request: FastifyRequest<RequestParams>, response: FastifyReply): Promise<void> {
    const { issueId, registration } = request.body

    const rateRepository = new RateRepository()
    const userRepository = new UserRepository()
    const useCase = new RateIssue(rateRepository, userRepository)

    await useCase.execute({
      registration,
      issueId
    })

    void response.code(201).send()
  }
}
