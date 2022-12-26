import ProductCard from '../Components/ProductCard';
import { getProducts } from './api/Products/index';


const ShopPage = ({ products }) => {
  return (
    <div>
      <h1>All Results</h1>

      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}