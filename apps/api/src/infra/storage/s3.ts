import { S3Client } from "@aws-sdk/client-s3";
import { env } from "../config/env";

// Supabase Storage exposes an S3-compatible API and requires path-style addressing.
export const s3 = new S3Client({
	endpoint: env.S3_ENDPOINT,
	region: env.S3_REGION,
	forcePathStyle: true,
	credentials: {
		accessKeyId: env.S3_ACCESS_KEY_ID,
		secretAccessKey: env.S3_SECRET_ACCESS_KEY,
	},
});
