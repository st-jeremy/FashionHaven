import { Box } from "@chakra-ui/react";
import FilteredList from "../Components/FilteredList";
import { useState } from "react";

const Filter = ({ details }) => {
  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );
  const handleChange = e => {
    setSearchField(e.target.value);
  };

  return ( 
    <Box>
      <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
        {FilteredList}
    </Box>
   );
}
 
export default Filter;