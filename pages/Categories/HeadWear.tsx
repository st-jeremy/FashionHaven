import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const HeadWear = () => {
  return ( 
    <Box>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} fontSize={'xl'}>
        <BreadcrumbItem  >
          <BreadcrumbLink href='/' as={Link}>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Clothing</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
   );
}
 
export default HeadWear;