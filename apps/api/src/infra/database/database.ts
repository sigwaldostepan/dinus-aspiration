import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../config/env";
import * as schema from "./schema";

// Supabase transaction pooler (port 6543) does not support prepared statements.
const client = postgres(env.DATABASE_URL, { prepare: false });

export const db = drizzle({ client, schema });
