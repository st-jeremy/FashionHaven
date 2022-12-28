import { useRouter } from 'next/router';
import ProductCard from '../../Components/ProductCard';
import { getProductsByCategory } from '../api/Products/[category]';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <div>
      <h1>Results for {router.query.category}</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}