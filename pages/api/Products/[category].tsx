import data from './data.json';

export function getProductsBySubCategory(sub_Category) {
  const products = data.filter((product) => product.sub_Category === sub_Category);
  return products;
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
    const products = getProductsBySubCategory(req.query.sub_Category);
    res.status(200).json(products);
  }
}

