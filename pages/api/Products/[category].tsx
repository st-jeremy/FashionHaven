import data from './data.json';

type data = {
  id: number,
  name: string,
  category: string,
  sub_Category: string,
  image: string,
  price: number
}

export function getProductsByCategory(category) {
  const products = data.filter((product) => product.category === category);
  return products;
}

export default function handler(req, res) {

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCategory(req.query.category);
    res.status(200).json(products);
  }
}

