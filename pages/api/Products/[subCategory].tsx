import data from './data.json';

export function getProductsBySubCategory(subCategory) {
  const products = data.filter((product) => product.subCategory === subCategory);
  return products;
}

export default function handler(req, res) {

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsBySubCategory(req.query.subCategory);
    res.status(200).json(products);
  }
}

