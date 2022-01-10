import axios from 'axios';
import { useState } from "react";

const SearchBox = ({setType})=>{

    const [id, setId] = useState('');

    const search = (type)=>{
        axios.get(`https://pokeapi.co/api/v2/type/${type}`)
          .then(res => setType(res.data))
          .catch(err => console.log(err));
    }
    
    return(
        <>
        <input type={'text'} onChange={e => setId(e.target.value)} value={id}/>
        <button onClick={()=>search(id)}>Seach</button>
        </>
    )
}
export default SearchBox;