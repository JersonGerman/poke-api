import axios from 'axios';
import { useEffect, useState } from "react";

const Pokemon = ({pokemon}) => {

    const [pokeInfo, setPokeInfo] = useState({});

    useEffect(()=>{
        let isActive=true;

        isActive && axios.get(pokemon.url)
                .then(res => setPokeInfo(res.data))
                .catch(err => console.log(err));
        return ()=>{isActive=false}
    },[pokemon.url])

    console.log(pokeInfo)
    return(
        <div className="card-pokemon">
            <img src={pokeInfo.sprites?.other.dream_world.front_default} alt={pokemon.name}/>
            <h3>{pokemon.name}</h3>
            <div className='type'>
                {
                    pokeInfo.types?.map(type =>(
                        <><span key={type.url}>{type.type.name}</span></>
                    ))
                }
            </div>
        </div>
    )
}
export default Pokemon;