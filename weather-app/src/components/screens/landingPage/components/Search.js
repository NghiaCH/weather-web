import Favourite from "./Favourite";

import SearchInput from "./SearchInput";

const Search = () => {
  return (
    <div className="landingPage-search">
      <div className="landingPage-search-form">
        <div className="landingPage-search-form-head">
          <span>Search</span>
        </div>
        <SearchInput />
      </div>
      <Favourite />
    </div>
  );
};

export default Search;
