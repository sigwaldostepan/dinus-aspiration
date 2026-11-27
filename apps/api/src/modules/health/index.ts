import { Elysia } from "elysia";
import { HealthService } from "./service";
import { HealthModel } from "./model";

export const health = new Elysia({ prefix: "/health" }).get(
	"/",
	async ({ set }) => {
		const result = await HealthService.check();
		if (result.status === "error") set.status = 503;
		return result;
	},
	{
		response: {
			200: HealthModel.checkResponse,
			503: HealthModel.checkResponse,
		},
	},
);
