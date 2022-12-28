import { useRouter } from 'next/router';
import ProductCard from '../../Components/ProductCard';
import { getProductsBySubCategory } from '../api/Products/[sub_Category]';

const SubCategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <div>
      <h1>Results for {router.query.subCategory}</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;

export async function getServerSideProps(ctx) {
  const subCategory = ctx.query.subCategory;
  const products = await getProductsBySubCategory(subCategory);
  return { props: { products } };
}