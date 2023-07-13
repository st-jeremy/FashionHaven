import { ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Point = ({name}: {name:string}) => {
  return ( 
    <ListItem>
      <ListIcon as={MdCheckCircle} color='white.500' />
      {name}
    </ListItem> 
  );
}

export default Point;