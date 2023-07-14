import React, { useState } from "react";
import {
  AsyncPaginate,
  //reduceGroupedOptions,
} from "react-select-async-paginate";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // const option = useRef([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleChange = (value) => {
    console.log(value);
    setSelectedValue(value);
    setSearchParams({ location: `${value.lat}_${value.lon}` });
  };

  const getData2 = async (inputValue) => {
    let arr = [];
    await axios
      .get(
        `https://api.locationiq.com/v1/autocomplete?key=pk.493833025b0ec92e26a2a472202cb840&q=${inputValue}`
      )
      .then((response) => {
        arr = [...response.data];
        //option.current = [arr];
      })
      .catch((error) => {
        console.log(error);
      });
    return {
      options: [...arr],
      hasMore: true,
    };
  };

  const loadOptions = (inputValue) => {
    return getData2(inputValue || "Ha Noi");
  };

  return (
    <AsyncPaginate
      value={selectedValue}
      loadOptions={loadOptions}
      debounceTimeout={1000}
      getOptionLabel={(e) => e.display_place}
      getOptionValue={(e) => e.place_id}
      onInputChange={handleInputChange}
      // reduceGroupedOptions={option.current}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
