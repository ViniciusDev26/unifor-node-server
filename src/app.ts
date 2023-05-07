import fastify from "fastify"
import { ReportIssueController } from "./controllers/ReportIssueController"

const app = fastify()
app.post("/report", ReportIssueController.handle)

export { app }