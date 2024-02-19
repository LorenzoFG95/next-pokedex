import Image from "next/image";
import styles from "./index.module.scss";

function PokemonD({ data }: { data: any }) {
  return (
    <div className={styles.PokemonD}>
      <h3 className={styles.heading}>{data.name}</h3>
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width={200}
        height={200}
      />
      <div className={styles.types}>
        {data.types.map((e: any) => {
          return <p key={e.type.name}>{e.type.name}</p>;
        })}
      </div>
    </div>
  );
}

export default PokemonD;

export async function getServerSideProps(ctx: any) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${ctx.query.name}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
