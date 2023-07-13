import { useRouter } from 'next/router';
import { Box, Heading  } from '@chakra-ui/react';

const Logo = () => {
  const router = useRouter();

  const handleClick =() =>{
    router.push('/')
  };

  return ( 
    <Box textAlign={'center'} m={'auto'}>
      <Heading 
        fontSize={{base:'14pt', sm: '18pt', lg: '30pt'}} 
        onClick={handleClick} 
        cursor='pointer' 
        width={{base: 'fit-content', md: '200px', lg:'300px'}} 
      >
        Fashion Haven<sup>®</sup>
      </Heading>
    </Box>
   );
}
 
export default Logo;