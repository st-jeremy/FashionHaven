import { Input, FormControl } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  return ( 
    <>
    <FormControl display='flex' maxWidth='900'>
      <Input 
        type="text" 
        name="Search" 
        id="search_field" 
        placeholder="Search products"
        marginLeft={2} 
        maxWidth={600} 
        marginRight={2}
        rightIcon={<SearchIcon />}
        
        />
      
    </FormControl>
    </>

   );
}
 
export default Search;