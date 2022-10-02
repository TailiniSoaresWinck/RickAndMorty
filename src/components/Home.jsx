import React, {useEffect, useState} from "react";


import { todosPersonagens } from "../function/function";
import './Home.css';
const Home=()=>{
    const [personagens, setPersonagens] = useState(null);

    useEffect(()=>{
        todosPersonagens(setPersonagens);
    },[])

    return(
        <>
            {
                personagens != null ? (
                    personagens.map(personagem => (
                        <div className='card' key={personagem.id} >
                            <p>{personagem.name}</p>
                            <img src={personagem.image} alt={personagem.name}/>
                            <a href={`/personagem/${personagem.id}`}> Detalhes </a>
                        </div>
                    ))
                ):('Carregando...')
            }
        </>
    )
}

export default Home;