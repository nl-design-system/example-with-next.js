import { NextApiRequest, NextApiResponse } from 'next';
let formData = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json({ ...formData, ...JSON.parse(req.body) });
  }

  if (req.method === 'GET') {
    res.status(200).send(formData);
  }
}
