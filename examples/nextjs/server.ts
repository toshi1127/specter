import * as express from "express";
import expressSession from "express-session";
import bodyParser from "body-parser";
import next from "next";
import Specter from "@specter/specter";
import Counter from "./services/Counter";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express.default();
  Specter.registerService(new Counter({}));
  server.use(bodyParser.json());
  server.use(
    expressSession({ secret: "keyboard cat", cookie: { maxAge: 60000 } })
  );
  server.use("/xhr", Specter.createMiddleware({}));
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  const sv = server.listen(3000, (err) => {
    if (err) throw err;
    const address = sv.address();
    if (!address || typeof address === "string") {
      return;
    }
    console.log(`> Ready on http://localhost:${address.port}`);
  });
});
