import data from './data.json';

export function getProductsByCategory(sub_Category) {
  const products = data.filter((product) => product.sub_Category === sub_Category);
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
