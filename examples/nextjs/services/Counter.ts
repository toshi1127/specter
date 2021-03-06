import { Service, Request, Response } from "@specter/specter";
import { RequestBody, ResponseBody } from "../agreed/counter";
import fetch from "isomorphic-unfetch";

export type CounterResponse = Response<{}, { count: number }>;

export default class Counter extends Service {
  constructor(config: object) {
    super("counter", config);
  }
  async update(
    request: Request<{}, {}, RequestBody>
  ): Promise<CounterResponse> {
    console.log("request body", request.body);
    console.log("request session", (request.req as any).session);
    const res = await fetch("http://localhost:8080/counter", {
      method: "PUT",
      body: JSON.stringify({
        count: request.body.count,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const data: ResponseBody = await res.json();
    return new Response(
      {},
      {
        count: +data.results.count,
      }
    );
  }
}
