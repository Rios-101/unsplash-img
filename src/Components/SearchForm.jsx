import { useGlobalContext } from "./../Context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchValue = e.target.elements.search.value;
    console.log(searchValue);
    if (!searchValue) return;
    setSearch(searchValue);
    searchValue = "";
  };

  return (
    <section>
      <h1 className="title">Rios Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          style={{ color: "black" }}
          className="form-input search-input"
          name="search"
          placeholder="Dog"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
