import "./AnimalSearchInput.css";
const AnimalSearchInput = ({ search }) => {
  return (
    <div className="center-content">
      <form className="px-8 pt-6 pb-4">
        <div className="mb-4">
          <label className="animal-search-label" htmlFor="animalSearch">
            Animal Search
          </label>
          <input
            id="animalSearch"
            type="text"
            className="animal-search-input focus:border-slate-500 focus:outline-none"
            placeholder="Search"
            onChange={(e) => search(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default AnimalSearchInput;
