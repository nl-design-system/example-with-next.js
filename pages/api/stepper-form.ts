// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  [key: string]: any;
};

const state = new Map();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body);

    Object.entries(data).map(([key, value]) => state.set(key, value));

    res.status(200).json(state);
  }

  if (req.method === 'GET') {
    res.status(200).send(state);
  }
}
