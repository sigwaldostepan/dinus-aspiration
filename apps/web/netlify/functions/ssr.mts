import server from "../../dist/server/index.js";

export default async (req: Request) => server.fetch(req);

export const config = {
  path: "/*",
  preferStatic: true,
};
