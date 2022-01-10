import PokemonList from "./PokemonList";

const PokemonInfo = ({type}) => {

    return(
        <div className="info-pokemon">
            <h2>{type.name}</h2>
            <PokemonList pokemons={type.pokemon}/>
        </div>
        
    )
}
export default PokemonInfo;