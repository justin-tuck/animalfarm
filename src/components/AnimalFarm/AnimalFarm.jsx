import AnimalSearchInput from "../AnimalSearchInput";
import AnimalGrid from "../AnimalGrid";
import useAnimalSearch from "../../hooks/useAnimalSearch";

function AnimalFarm() {
  const [animals, search] = useAnimalSearch();
  return (
    <>
      <h1 className="header">Animal Farm</h1>
      <AnimalSearchInput search={search} />
      <AnimalGrid animals={animals} />
    </>
  );
}

export default AnimalFarm;
