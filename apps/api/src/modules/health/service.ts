import { sql } from "drizzle-orm";
import { HeadBucketCommand } from "@aws-sdk/client-s3";
import { db } from "../../infra/database/database";
import { s3 } from "../../infra/storage/s3";
import { env } from "../../infra/config/env";
import { logger } from "../../infra/logger/logger";
import type { CheckResponse } from "./model";

type CheckStatus = "ok" | "error";

export abstract class HealthService {
	static async check(): Promise<CheckResponse> {
		const [database, storage] = await Promise.all([
			HealthService.checkDatabase(),
			HealthService.checkStorage(),
		]);

		return {
			status: database === "ok" && storage === "ok" ? "ok" : "error",
			database,
			storage,
		};
	}

	static async checkDatabase(): Promise<CheckStatus> {
		try {
			await db.execute(sql`select 1`);
			return "ok";
		} catch (error) {
			logger.error({ err: error }, "database healthcheck failed");
			return "error";
		}
	}

	static async checkStorage(): Promise<CheckStatus> {
		try {
			await s3.send(new HeadBucketCommand({ Bucket: env.S3_BUCKET }));
			return "ok";
		} catch (error) {
			logger.error({ err: error }, "storage healthcheck failed");
			return "error";
		}
	}
}
