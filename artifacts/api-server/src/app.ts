import { createRequire } from "node:module";
import express, {
  type Express,
  type Request,
  type RequestHandler,
  type Response,
} from "express";
import cors from "cors";
import router from "./routes";
import { logger } from "./lib/logger";

const require = createRequire(import.meta.url);

type LoggedRequest = Request & { id?: string | number };
type LoggedResponse = Response;
type HttpLoggerFactory = (options: {
  logger: typeof logger;
  serializers: {
    req(req: LoggedRequest): {
      id?: string | number;
      method: string;
      url: string;
    };
    res(res: LoggedResponse): {
      statusCode: number;
    };
  };
}) => RequestHandler;

const pinoHttp = require("pino-http") as HttpLoggerFactory;

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: LoggedRequest) {
        return {
          id: req.id,
          method: req.method,
          url: req.url.split("?")[0],
        };
      },
      res(res: LoggedResponse) {
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

export default app;
