import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Card from "../components/card";
import { useState, useEffect } from "react";
import Modal from "@/components/modal";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState();
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        {" "}
        {isOpen && <Modal setIsOpen={setIsOpen} pokemon={currentPokemon} />}
        {pokemon.map((pokemon) => {
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
    </>
  );
}
