import style from "./Search.module.css"
function Search(){
return(
  <div>
<form>
      <input
        type="text"
        placeholder="제품을 검색해보세요. ex)RTX..., RX.."
        className="search_bar"
        name="searchText"
      />
    </form>
  </div>
  );
}
export default Search 