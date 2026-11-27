function required(key: string): string {
	const value = process.env[key];
	if (!value) throw new Error(`Missing required env: ${key}`);
	return value;
}

function list(key: string): string[] {
	const raw = required(key).trim();
	const items: unknown = raw.startsWith("[") ? JSON.parse(raw) : raw.split(",");
	if (!Array.isArray(items) || !items.every((item) => typeof item === "string"))
		throw new Error(`Invalid env: ${key} must be a comma-separated list or a JSON array of strings`);
	return items.map((item) => item.trim());
}

export const env = {
	DATABASE_URL: required("DATABASE_URL"),
	S3_ENDPOINT: required("S3_ENDPOINT"),
	S3_REGION: required("S3_REGION"),
	S3_ACCESS_KEY_ID: required("S3_ACCESS_KEY_ID"),
	S3_SECRET_ACCESS_KEY: required("S3_SECRET_ACCESS_KEY"),
	S3_BUCKET: required("S3_BUCKET"),
	CORS_ORIGIN: list("CORS_ORIGIN"),
	LOG_LEVEL: process.env.LOG_LEVEL ?? "info",
};
