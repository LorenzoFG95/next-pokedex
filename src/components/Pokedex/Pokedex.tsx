import styles from "index.module.scss";
import Modal from "../modal";
import Card from "../card";
import { useState } from "react";

const Pokedex = ({ pokemon }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState();
  return (
    <div className="wrapper">
      {" "}
      {isOpen && <Modal setIsOpen={setIsOpen} pokemon={currentPokemon} />}
      {pokemon.map((pokemon: any) => {
        return (
          <Card
            key={pokemon.name}
            nome={pokemon.name}
            url={pokemon.url}
            setIsOpen={setIsOpen}
            setCurrentPokemon={setCurrentPokemon}
          />
        );
      })}
    </div>
  );
};
export default Pokedex;
