import { NextApiRequest, NextApiResponse } from 'next';

interface FormInput {
  'given-name': string;
  'family-name': string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json(req.body);
  } else {
    // Handle any other HTTP method
  }
}
