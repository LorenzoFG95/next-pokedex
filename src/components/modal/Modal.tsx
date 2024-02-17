import styles from "./index.module.scss";

const Modal = ({ setIsOpen, pokemon }: any) => {
  console.log(pokemon.types[0].type.name);

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <h3 className={styles.heading}>{pokemon.name}</h3>

          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className={styles.types}>
            {pokemon.types.map((e: any) => {
              return <p key={e.type.name}>{e.type.name}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
