import { useState, useEffect } from "react";
import { Link } from "react-router";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => response.json())
      // after the data is fetched, we set the pokemons state to the data.results
      // .then(data => setPokemons(data.results))
      // after fetching the data, in the data.results, we need to fetch the url of each pokemon
      .then((data) => {
        // data.results.map((pokemon) => {
        //   fetch(pokemon.url)
        //     .then((response) => response.json())
        //     .then((data) => {

        // Activity: 1. Address the issue of double rendering of the data
        //             setPokemons((prevState) => [
        //               ...prevState,
        //               { name: data.name, img: data.sprites.front_default },
        //             ]);
        const fetchPokemonDetails = async () => {
          const pokemonDetails = await Promise.all(
            data.results.map(async (pokemon) => {
              const response = await fetch(pokemon.url);
              const pokemonData = await response.json();
              return {
                name: pokemonData.name,
                img: pokemonData.sprites.front_default,
                id: pokemonData.id,
              };
            })
          );
          setPokemons(pokemonDetails);
        };
        fetchPokemonDetails();
      });
  }, []);
  // console.log(data.sprites.front_default)
  // setPokemons(data)
  // Create a new array with objects containing the name and data.sprites.front_default (image) of each pokemon
  // setPokemons from the previous state and add the new object to the array

  //             // setPokemons(data => {
  //             //   // return [...data, {name: data.name, img: data.sprites.front_default}]
  //             //   console.log(data)
  //             // })
  //             // let newArrPokemons = [...data, {name: data.name, img: data.sprites.front_default}]
  //             // setPokemons(newArrPokemons)
  //           });
  //       });
  //     });
  // }, []);

  console.log(pokemons);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Pokemon List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Display the name and image of each Pokémon in a styled card */}
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="border rounded-lg shadow-lg p-4 cursor-pointer hover:bg-sky-700 transition hover:text-white"
            >
              {/* Add an onClick event to navigate to pokemons/:pokemonName */}
              <Link
                to={`/pokemons/${pokemon.name}`}
                className="flex flex-col items-center"
              >
                <h2 className="text-xl font-bold">{pokemon.name}</h2>
                <img
                  src={pokemon.img}
                  alt={`${pokemon.name}'s image`}
                  className="w-32 h-32 mx-auto"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonList;
