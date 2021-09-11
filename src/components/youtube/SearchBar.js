import { useState } from "react";
import youtube from "../../apis/youtube";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Iput</label>
        <input type="text" value={term} onChange={onInputChange} />
      </form>
    </div>
  );
};

export default SearchBar;
