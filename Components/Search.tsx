import { 
  Input, 
  FormControl, 
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Key, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import { useRouter } from 'next/router';

// import { ConnectedProps, connect } from "react-redux";
// // import { RootState } from ..
// import { searchQuery } from "../redux/actions/searchActions";

// type PropsFromRedux = ConnectedProps<typeof connector>;

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
      return filtered.product.text.toLowerCase().includes(inputText);
    }
  });

  const router = useRouter();
  const handleSubmit =() =>{
    router.push({
      pathname: '/Filter',
      query: { filteredData: JSON.stringify(filteredData) }
    });
  }

  return ( 
    <Box margin= 'auto'>
      <Box display={{ base: 'flex', lg: 'none' }} >
        <Menu isOpen={isOpen}>
          <MenuButton
            as={Button}
            bgColor={'black'}
            _expanded={{ bgColor: 'white', color: 'black' }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            width={'fit-content'}
            fontSize={{base: '12pt', md: '18pt'}}
            padding={{base: '1', md: 'auto'}}
          >
            <SearchIcon />
            {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
          </MenuButton>

          <MenuList 
            onMouseLeave={onClose} 
            onMouseEnter={onOpen}
            color={'black'}
            zIndex={'1000'}
            marginTop={'-.4rem'}
          >
            <MenuItem 
              width={{ base: '250px', md: 'fit-content' }} 
              _hover={{bgColor: 'white'}} 
              display={{base:'flex', lg:'none'}} 
              id='search'
            >
              <form action="" method="get" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="search"
                  id="search_field"
                  placeholder="Search products"
                  w={'100%'}
                  height={{ base: '8', lg: 'auto' }}
                  marginBottom={'2'} 
                  // value= {inputText}
                  // onClick={setInputText}
                  // onChange={inputHandler}
                /> 
                <Button 
                  bgColor={'black'} 
                  color={'white'}  
                  _hover={{bgColor: 'white', border: '1px solid black', color: 'black'}} 
                  type='submit'
                >
                  Search &nbsp;
                  <SearchIcon />
                </Button>
              </form>
            </MenuItem>
            {filteredData && filteredData.map((filter: string, index: number) =>
              <MenuItem key={index}>
                {filter}
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </Box>

      <FormControl display={{ base: 'none', lg: 'flex' }}>
        <form action="" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="Search"
            id="search_field"
            placeholder="Search products"
            width={{lg: '300px', xl:'450px' }}
            height={ '2.4rem' }
            marginTop={'0'} 
            value= {inputText}
            onChange={inputHandler}
          />
          <SearchIcon style={{ position: 'absolute', top: '12', right: '15', color: 'white' }} type='submit' />
        </form>
      </FormControl>
    </Box>
  );
}
 
export default Search;

// const Search = ({ products }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [inputText, setInputText] = useState("");

//   let inputHandler = (e) => {
//     var lowerCase = e.target.value.toLowerCase();
//     setInputText(lowerCase);
//   };

//   const allProducts = products?.map((product: { id: Key; }) => (
//     <ProductCard key={product.id} product={product} />
//   ));
  
//   const filteredData = allProducts?.filter((filtered) => {
//     if (inputText === '') {
//       return filtered;
//     }
//     else {
//       return filtered.text.toLowerCase().includes(setInputText)
//     }
//   });

//   const router = useRouter();
//   const handleSubmit =() =>{
//     router.push('/Filter');
//     filteredData;
//   }

//   return ( 
//     <Box margin= 'auto'>
//       <Box display={{ base: 'flex', lg: 'none' }} >
//         <Menu isOpen={isOpen}>
//           <MenuButton
//             as={Button}
//             bgColor={'black'}
//             _expanded={{ bgColor: 'white', color: 'black' }}
//             onMouseEnter={onOpen}
//             onMouseLeave={onClose}
//             width={'fit-content'}
//             fontSize={{base: '12pt', md: '18pt'}}
//             padding={{base: '1', md: 'auto'}}
//           >
//             <SearchIcon />
//             {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
//           </MenuButton>

//           <MenuList 
//             onMouseLeave={onClose} 
//             onMouseEnter={onOpen}
//             color={'black'}
//             zIndex={'1000'}
//             marginTop={'-.4rem'}
//           >
//             <MenuItem 
//               width={{ base: '250px', md: 'fit-content' }} 
//               _hover={{bgColor: 'white'}} 
//               display={{base:'flex', lg:'none'}} 
//               id='search'
//             >
//               <form action="" method="get" onSubmit={handleSubmit}>
//                 <Input
//                   type="text"
//                   name="search"
//                   id="search_field"
//                   placeholder="Search products"
//                   w={'100%'}
//                   height={{ base: '8', lg: 'auto' }}
//                   marginBottom={'2'} 
//                   // value= {inputText}
//                   // onClick={setInputText}
//                   // onChange={inputHandler}
//                 /> 
//                 <Button 
//                   bgColor={'black'} 
//                   color={'white'}  
//                   _hover={{bgColor: 'white', border: '1px solid black', color: 'black'}} 
//                   type='submit'
//                 >
//                   Search &nbsp;
//                   <SearchIcon />
//                 </Button>
//               </form>

//             </MenuItem>
//             {/* use map function here */} 
//             <MenuItem>{filteredData}</MenuItem>
//             {/* {filteredData.map(filter=> {
//               <MenuItem>{filter}</MenuItem>
//             })} */}
//           </MenuList>
//         </Menu>
//       </Box>

//       <FormControl display={{ base: 'none', lg: 'flex' }}>
//         <form action="" onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             name="Search"
//             id="search_field"
//             placeholder="Search products"
//             width={{lg: '300px', xl:'450px' }}
//             height={ '2.4rem' }
//             marginTop={'0'} 
//             value= {inputText}
//             onChange={inputHandler}
//           />
//           <SearchIcon style={{ position: 'absolute', top: '12', right: '15', color: 'white' }} type='submit' />
//         </form>
//       </FormControl>
//     </Box>

//   );
// }
 
// export default Search;

// /Shop?Search=nike


