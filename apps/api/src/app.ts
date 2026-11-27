import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { env } from "./infra/config/env";
import { health } from "./modules/health";

export const app = new Elysia()
	.use(cors({ origin: env.CORS_ORIGIN }))
	.get("/", () => "Hello Elysia")
	.use(health);
