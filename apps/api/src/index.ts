import { app } from "./app";

const server = app.listen(process.env.PORT ?? 3001);

console.log(
  `🦊 Elysia is running at ${server.server?.hostname}:${server.server?.port}`
);
