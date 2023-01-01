import { useRouter } from 'next/router';

const CartIcon = () => {

  const router = useRouter();
  const handleCartClick =() =>{
    router.push('/Cart')
  }
  return ( 
  <>
    <Avatar 
      icon={<GiShoppingCart  fontSize='25pt'/>}
      style={{
        width: '30px', 
        height: '50px', 
        cursor: 'pointer',
        margin: 'auto'
      }} 
      bgColor={'black'}
      onClick={handleCartClick}
    >
      <AvatarBadge boxSize='1em' bgColor={'red'} color={'white'} position={'absolute'} top={'0'} border={'none'} fontSize='12pt'>{getItemsCount()} </AvatarBadge>
    </Avatar>
  </> 
  );
}
 
export default CartIcon;