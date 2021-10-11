type props = {
  name: string;
};

export const Header = (props: props) => {
  return <h1>Fala tu, {props.name}</h1>;
};
