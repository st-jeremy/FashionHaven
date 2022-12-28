import { useRouter } from 'next/router';
import ProductCard from '../../Components/ProductCard';
import { getProductsBySubCategory } from '../api/Products/[category]';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <div>
      <h1>Results for {router.query.sub_Category}</h1>
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
  const sub_Category = ctx.query.sub_Category;
  const products = await getProductsBySubCategory(sub_Category);
  return { props: { products } };
}