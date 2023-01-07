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
            _expanded={{fontSize: '18pt', bgColor: 'white', color: 'black' }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            width={'fit-content'}
            fontSize={{base: '16pt', md: '25pt'}}
          >
            {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
          </MenuButton>

          <MenuList 
            onMouseLeave={onClose} 
            onMouseEnter={onOpen}
            color={'black'}
            zIndex={'1000'}
            marginTop={'-.4rem'}
          >
            <MenuItem fontWeight={'600'} _hover={{bgColor: 'white'}}>Search Products</MenuItem>
            <MenuDivider />

            <MenuItem width={{ base: '250px', lg: 'fit-content' }} _hover={{bgColor: 'white'}} display={'flex'} id='search'>
              <form action="" method="get">
              <Input
                type="text"
                name="Search"
                id="search_field"
                placeholder="Search products"
                width={{ base: '250px', lg: '450' }}
                height={{ base: '8', lg: 'auto' }}
                marginBottom={'2'} 
                value= {inputText}
                onChange={inputHandler}
              /> 
              <Button bgColor={'black'} color={'white'}  _hover={{bgColor: 'white', border: '1px solid black', color: 'black'}} type='submit' >
                Search &nbsp;
                <SearchIcon />
              </Button>
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
          height={ '2.4rem' }
          marginTop={'0'} 
        />
        <SearchIcon style={{ position: 'absolute', top: '15', right: '15' }} />
      </FormControl>
    </Box>

  );
}
 
export default Search;