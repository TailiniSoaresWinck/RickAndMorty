import axios from 'axios';


//Fazendo requisição a API

const todosPersonagens = async (state) =>{
    const req = await axios.get('https://rickandmortyapi.com/api/character');
    state(req.data.results);
}

const unicoPersonagem =  async(id, state) =>{
    const req = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

    state(req.data);
}

export {todosPersonagens, unicoPersonagem};