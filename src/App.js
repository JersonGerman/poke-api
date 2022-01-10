import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import PokemonInfo from './components/PokemonInfo';
import SearchBox from './components/SearchBox';
import getNumber from './util/getNumber';


function App() {
  
  const [type, setType] = useState({});

  useEffect(()=>{
  
    axios.get(`https://pokeapi.co/api/v2/type/${getNumber(10)}`)
      .then(res => setType(res.data))
      .catch(err => console.log(err))

  },[])

  return (
    <div className="App">
      <SearchBox setType={setType}/>
      <PokemonInfo type={type}/>
    </div>
  );
}

export default App;
