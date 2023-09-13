export default function Header(props) {
  const { amount } = props;
  return (
    <header>
      <h1>Super Watering World</h1>
      <h2>Saving {amount} plants from dehydration</h2>
    </header>
  );
}
