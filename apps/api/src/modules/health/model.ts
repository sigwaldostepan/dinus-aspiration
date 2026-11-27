import { t, type UnwrapSchema } from "elysia";

export const HealthModel = {
	checkResponse: t.Object({
		status: t.Union([t.Literal("ok"), t.Literal("error")]),
		database: t.Union([t.Literal("ok"), t.Literal("error")]),
		storage: t.Union([t.Literal("ok"), t.Literal("error")]),
	}),
} as const;

export type CheckResponse = UnwrapSchema<typeof HealthModel.checkResponse>;
