import { 
  Input, 
  FormControl, 
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return ( 
    <Box>
      <Box display={{ base: 'flex', lg: 'none' }}>
        <Menu isOpen={isOpen}>
          <MenuButton>
            <SearchIcon />
            {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
          </MenuButton>

          <MenuList bgColor={'black'} color={'white'}>
            <MenuItem>Search Products</MenuItem>
            <MenuDivider />

            <FormControl width={{ base: '250px', lg: 'fit-content' }} display={'flex'} id='search'>
              <Input
                type="text"
                name="Search"
                id="search_field"
                placeholder="Search products"
                width={{ base: '250px', lg: '450' }}
                height={{ base: '7', lg: 'auto' }}
                marginTop={'2'} />
              <SearchIcon style={{ position: 'relative', top: '18', right: '12' }} />
            </FormControl>
          </MenuList>
        </Menu>
      </Box>

      <FormControl width={{ base: '250px', lg: 'fit-content' }} display={{ base: 'none', lg: 'flex' }}>
        <Input
          type="text"
          name="Search"
          id="search_field"
          placeholder="Search products"
          width={{ base: '250px', lg: '450' }}
          height={{ base: '7', lg: 'auto' }}
          marginTop={'2'} />
        <SearchIcon style={{ position: 'absolute', top: '18', right: '12' }} />
      </FormControl>
    </Box>

   );
}
 
export default Search;