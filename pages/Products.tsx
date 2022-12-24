import { 
  Box, 
  CardBody, 
  CardFooter, 
  Card, 
  Stack, 
  Divider, 
  Heading, 
  Text, 
  Button,
  SimpleGrid
} from '@chakra-ui/react';
import {ProductList} from './ProductList'
import Head from 'next/head';
import Image from 'next/image';

export default function Products() {
  return (
    <>
      <Head>
        <title>eCart</title>
        <meta name="description" content="Top-notch eCommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box p={5} display="flex" >
          {
            ProductList && ProductList.map(product =>{
              return(
                <Box
                  key={product.id} 
                >
                  <Card m={5}>
                    <CardBody>
                      <Image src={product.image} alt={product.name} width={400} height={500} />
                      <Stack mt='6' spacing='3'>
                        <Heading size='md'>{product.name}</Heading>
                      </Stack>
                    </CardBody>

                    <Divider />
                    <CardFooter>
                      <Text color='blue.600' fontSize='2xl'>
                        <b>${product.price}</b>
                      </Text>

                      <Button colorScheme='red' position={'absolute'} right={'2.5'}>
                        Add to cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Box>
                
              )
            })
          }
        </Box>
      </main>
    </>
  )
}