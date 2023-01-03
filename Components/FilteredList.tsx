import { Box } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const FilteredList = ({ products}) => {
  return ( 
    <Box>
      {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Box>

   );
}
 
export default FilteredList;