import data from './data.json';

type data = {
  id: number,
  name: string,
  category: string,
  sub_Category: string,
  image: string,
  price: number
}


// it exports a function that takes in an HTTP request as its first parameter and returns the data object as its second parameter.
export function getProducts() {
  return data;
}

// function that handles HTTP requests to this endpoint.
export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProducts();
    res.status(200).json(products);
  }
}