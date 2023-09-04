import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;
  const isArray = Array.isArray(plants);

  const parsedPlants =
    isArray &&
    plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);

  return (
    <section>
      <h1>List of plants</h1>
      {parsedPlants}
      {!isArray && <h2>HEY GIMME AN ARRAY</h2>}
    </section>
  );
}
