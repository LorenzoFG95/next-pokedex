import styles from "./index.module.scss";

const Card = ({ pokemon }) => {
  if (!pokemon) return <h1>Loading</h1>;
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.nome} />
    </div>
  );
};

export default Card;
