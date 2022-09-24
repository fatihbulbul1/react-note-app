import React from "react";

const Search = ({handleSearchText}) =>{
/*     const [input , setInput] = useState('')
    function handleSearch(e) {
        setInput(e.target.value)
    } */
    return(
        <div className="search-div">
            <input placeholder="type to search..." 
            /* onKeyDown={(e) => search(e.target.value)} */
            onChange={(e) => handleSearchText(e.target.value)}
            autoComplete="off"
            type="search"
            id="search"/>
        </div>
    )
}

export default Search