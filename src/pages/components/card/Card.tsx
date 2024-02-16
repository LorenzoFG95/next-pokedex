import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const Card = (props: any) => {
  const [pokemonData, setPokemonData] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      });
  }, [props.nome]);
  if (!pokemonData) return <h1>Loading</h1>;
  return (
    <div className={styles.card}>
      <h2>{props.nome}</h2>
      <img src={pokemonData.sprites.front_default} alt={props.nome} />

      <p>{pokemonData.id}</p>
    </div>
  );
};

export default Card;
