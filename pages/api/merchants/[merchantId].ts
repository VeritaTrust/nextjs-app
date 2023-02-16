import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('HELLLLOOO');
  res.status(200).json('HELLO 1');
}
