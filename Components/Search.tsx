import { Input, FormControl, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  return ( 
    <Box>
      <FormControl width={'fit-content'} display={{base: 'none', lg: 'flex'}}>
        <Input 
          type="text" 
          name="Search" 
          id="search_field" 
          placeholder="Search products"
          marginLeft={2} 
          width={450} 
          marginRight={2}
        />
        <SearchIcon style={{position:'absolute', top:'13', right: '30'}}/>
      </FormControl>

      <FormControl display={{base: 'flex', lg: 'none'}} position={'absolute'} top={5} right={0}>
        <SearchIcon />
      </FormControl>
    </Box>
   );
}
 
export default Search;