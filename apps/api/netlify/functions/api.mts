import { app } from "../../src/app";

export default async (req: Request) => app.handle(req);

export const config = {
  path: "/*",
};
