import data from './data.json';
import { NextApiRequest, NextApiResponse } from 'next';

export function getProductsByCategory(category) {
  const products = data.filter((product) => product.category === category);
  return products;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCategory(req.query.category);
    res.status(200).json(products);
  }
}

