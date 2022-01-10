import Pokemon from "./Pokemon";

const PokemonList = ({pokemons})=>{

    return(
        <div className="list-pokemon">
        {
            pokemons?.map(pokemon => <Pokemon pokemon={pokemon.pokemon} key={pokemon.pokemon.name}/>)
        }
        </div>
    )
}
export default PokemonList;