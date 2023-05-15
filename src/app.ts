import fastify from 'fastify'
import queryString from 'querystring'

import { ReportIssueController } from './controllers/ReportIssueController'
import { ListIssuesController } from './controllers/ListIssuesController'
import { UpvoteController } from './controllers/UpvoteController'

const app = fastify({
  querystringParser: str => queryString.parse(str)
})

app.get('/issues', ListIssuesController.handle)
app.post('/rate', UpvoteController.handle)
app.post('/report', ReportIssueController.handle)

export { app }
