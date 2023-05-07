import { app } from "./app";
import env from "./env";

async function bootstrap() {
  await app.listen({
    host: env.host,
    port: env.port
  })

  console.log(`Server is running on: http://${env.host}:${env.port}`)
}
bootstrap();