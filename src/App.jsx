import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [lista, setLista] = useState(false);

    const fetchData = async () => {

      setLista(true)

      const req = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const res = await req.json();
      
      if(req.ok){
        setLista(false)
        return setPokemonList(res.results)
      }
    }

  useEffect(() => {
    fetchData();
  }, [])

  return (
     <>
     <main className='container'>
        <section className='row'>

           <h1>Pokemones:</h1>
          {lista?<div>Cargando...</div>:pokemonList.map(e=>(

          <div className="col" style={{marginTop: '20px'}} key={e.id}>
            <h4>{e.name}</h4>
          </div>

           ))}
        </section>
    </main>
     </>
    
  )
}

export default App
