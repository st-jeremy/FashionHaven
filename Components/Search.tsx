import { Input, FormControl, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  return ( 
    <Box>
      <FormControl width={{base: '250px', lg:'fit-content'}} display={ 'flex'}>
        <Input 
          type="text" 
          name="Search" 
          id="search_field" 
          placeholder="Search products"
          width={{base: '250px', lg: '450'}} 
          height={{base: '7', lg: 'auto'}}
          marginTop={'2'}
        />
        <SearchIcon style={{position:'absolute', top:'18', right: '12'}}/>
      </FormControl>

    </Box>
   );
}
 
export default Search;