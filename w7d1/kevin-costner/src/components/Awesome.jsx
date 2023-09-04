export default function Awesome(props) {
  const { icon } = props;
  return (
    <>
      <h2>
        {icon}
        {icon}
        {icon}
        {icon}
        {icon}
        {icon}
        {icon}
      </h2>
      {props.children}
      <h2>
        {icon}
        {icon}
        {icon}
        {icon}
        {icon}
        {icon}
        {icon}
      </h2>
    </>
  );
}
