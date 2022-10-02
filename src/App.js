import {BrowserRouter, Routes, Route} from  'react-router-dom';
import Home from './components/Home';
import Personagem from './components/Personagem';

import './index.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/personagem/:id" element={<Personagem></Personagem>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
