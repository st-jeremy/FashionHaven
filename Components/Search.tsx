import { Input, FormControl } from "@chakra-ui/react";

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
        marginRight={2}/>
      <Input  type="submit" width={200} value="Search" bgColor='blue.500'/>
    </FormControl>
    </>

   );
}
 
export default Search;