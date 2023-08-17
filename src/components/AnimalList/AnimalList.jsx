import Animal from "../Animal";
const AnimalList = ({ animals }) => {
  return (
    <ul>
      {animals.map((animal) => (
        <Animal key={animal.id} {...animal} />
      ))}

      {animals.length === 0 && "No animals found."}
    </ul>
  );
};

export default AnimalList;
