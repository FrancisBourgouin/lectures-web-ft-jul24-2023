import { checkIfWellWatered } from "../helpers/dateHelpers";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const isWellWatered = checkIfWellWatered(wateringInterval, lastWatered);

  const style = {
    border: "0.5em solid black",
    borderColor: isWellWatered ? "green" : "red",
    margin: "2em",
  };

  return (
    <article style={style}>
      <h1>
        {name} - {type}
      </h1>
      <h2>{lastWatered}</h2>
    </article>
  );
}
