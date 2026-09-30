import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// Serve the built website (artifacts/evolving-the-conversation) so a single
// Node process can host both the site and the API (e.g. on Hostinger).
const staticDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../evolving-the-conversation/dist/public",
);

if (fs.existsSync(staticDir)) {
  app.use(express.static(staticDir));
  // SPA fallback: let the client-side router handle unknown non-API paths.
  app.get(/^(?!\/api\/).*/, (_req, res) => {
    res.sendFile(path.join(staticDir, "index.html"));
  });
}

export default app;
