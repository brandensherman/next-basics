import Head from 'next/head';

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
      </Head>
      <div>
        Welcome, {pokemon?.name}!
        <img src={pokemon?.sprites.front_default} />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemon = await res.json();

  let paths = pokemon.results.map((p) => {
    return `/pokemon/${p.name}`;
  });

  // at build time all of these paths will get rendered with these pokemon names
  // fallback false -> all undefined paths will 404
  return {
    paths,
    fallback: false,
  };
}

// all params are referencing the dynamic route of this file
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

export default Pokemon;
