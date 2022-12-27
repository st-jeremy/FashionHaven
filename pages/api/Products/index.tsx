import data from './data.json';

type data = {
  id: number,
  product: string,
  category: string,
  image: string,
  price: number
}


export function getProducts() {
  return data;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProducts();
    res.status(200).json(products);
  }
}