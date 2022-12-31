import data from './data.json';

type data = {
  id: number,
  name: string,
}

export function getBrands() {
  return data;
}

export default function handler(req, res) {
  const brands = getBrands();
  res.status(200).json(brands);
}