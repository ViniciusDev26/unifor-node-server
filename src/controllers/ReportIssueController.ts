import { FastifyReply, FastifyRequest } from "fastify";
import { ReportIssue } from "../useCases/ReportIssue";

interface RequestFormat {
  Body: {
    topic: string,
    detail: string
    registration: string
  }
}

export class ReportIssueController {
  static async handle(request: FastifyRequest<RequestFormat>, response: FastifyReply) {
    const { topic, detail, registration } = request.body

    const useCase = new ReportIssue()
    useCase.execute({
      topic,
      detail,
      registration
    })

    response.code(201).send()
  }
}