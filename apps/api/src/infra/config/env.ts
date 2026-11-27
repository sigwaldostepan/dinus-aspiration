function required(key: string): string {
	const value = process.env[key];
	if (!value) throw new Error(`Missing required env: ${key}`);
	return value;
}

export const env = {
	DATABASE_URL: required("DATABASE_URL"),
	S3_ENDPOINT: required("S3_ENDPOINT"),
	S3_REGION: required("S3_REGION"),
	S3_ACCESS_KEY_ID: required("S3_ACCESS_KEY_ID"),
	S3_SECRET_ACCESS_KEY: required("S3_SECRET_ACCESS_KEY"),
	S3_BUCKET: required("S3_BUCKET"),
	CORS_ORIGIN: required("CORS_ORIGIN").split(",").map((origin) => origin.trim()),
	LOG_LEVEL: process.env.LOG_LEVEL ?? "info",
};
