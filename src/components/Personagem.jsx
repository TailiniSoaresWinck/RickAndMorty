import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {unicoPersonagem} from '../function/function';

import './Personagem.css';

const Personagem = () => {
    const [personagem, setPersonagem] = useState(null);

    const params = useParams();

    useEffect(() => {
        unicoPersonagem(params.id, setPersonagem);
    }, [])

    return(
        <>
           {personagem != null ? (
            <div className='detalhes'>
                <h3 id='nome'>{personagem.name}</h3>
                <img src={personagem.image} alt={personagem.name} />
                <div className="info">
                    <h3>Species:</h3>
                    <p>{personagem.species}</p>
                    <h3>Gender:</h3>
                    <p>{personagem.gender}</p>
                    <h3>Status:</h3>
                    <p>{personagem.status}</p>
                </div>
            </div>
           ) : ('Carregando...')
           }
        </>
    )
}

export default Personagem;