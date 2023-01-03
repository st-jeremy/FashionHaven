import { 
  Input, 
  FormControl, 
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Key, useState } from 'react';
import ProductCard from '../Components/ProductCard';

const Search = ({ products }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const allProducts = products?.map((product: { id: Key; }) => (
    <ProductCard key={product.id} product={product} />
  ));
  
  const filteredData = allProducts?.filter((filtered) => {
    if (inputText === '') {
        return filtered;
    }
    else {
        return filtered.text.toLowerCase().includes(setInputText)
    }
  });

  return ( 
    <Box margin= 'auto'>
      <Box display={{ base: 'flex', lg: 'none' }}>
        <Menu isOpen={isOpen}>
          <MenuButton
            as={Button}
            leftIcon={<SearchIcon />}
            bgColor={'black'}
            _hover={{  color: 'white'}}
            _expanded={{fontSize: '18pt', }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            width={'fit-content'}
            fontSize={{base: '18pt', md: '25pt'}}
          >
            {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
          </MenuButton>

          <MenuList 
            onMouseLeave={onClose} 
            onMouseEnter={onOpen}
            color={'black'}
            zIndex={'1000'}
          >
            <MenuItem fontWeight={'600'}>Search Products</MenuItem>
            <MenuDivider />

            <MenuItem width={{ base: '250px', lg: 'fit-content' }} display={'flex'} id='search'>
              <form action="" method="get">
              <Input
                type="text"
                name="Search"
                id="search_field"
                placeholder="Search products"
                width={{ base: '250px', lg: '450' }}
                height={{ base: '7', lg: 'auto' }}
                marginTop={'2'} 
                value= {inputText}
                onChange={inputHandler}
              />
              <SearchIcon style={{ position: 'relative', top: '6', right: '25' }} type='submit' />
              </form>
            </MenuItem>

            
          </MenuList>
        </Menu>
      </Box>

      <FormControl width={{ base: '250px', lg: 'fit-content' }} display={{ base: 'none', lg: 'flex' }}>
        <Input
          type="text"
          name="Search"
          id="search_field"
          placeholder="Search products"
          width={ '450px' }
          height={ '2rem' }
          marginTop={'2'} />
        <SearchIcon style={{ position: 'absolute', top: '18', right: '12' }} />
      </FormControl>
    </Box>

   );
}
 
export default Search;