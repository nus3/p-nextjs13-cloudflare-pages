// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type HelloResponse = {
  name: string;
};

export const config = {
  runtime: "experimental-edge",
};

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {
  return new Response(JSON.stringify({ name: "nus3" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
