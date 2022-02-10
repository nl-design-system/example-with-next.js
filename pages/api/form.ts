import { NextApiRequest, NextApiResponse } from 'next';
let formData = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    console.log(JSON.parse(req.body));
    formData = { ...formData, ...JSON.parse(req.body) };
    console.log('POST formData', formData);
    res.status(200).json(formData);
  } else if (req.method === 'GET') {
    console.log('formData', formData);
    res.status(200).send(formData);
  } else {
    // Handle any other HTTP method
  }
}
