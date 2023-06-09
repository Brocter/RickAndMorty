import './App.css';
import NavBar from './components/Nav/NavBar';
import Login from './views/Login';
import { useState } from 'react';
import axios from "axios";
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';
import Detail from './views/Detail'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function App() {

  const navigate = useNavigate()

  const [access,setAccess] = useState(false);
  
  const email = "test@gmail.com"
  const password = 'contra1'

  const [characters, setCharacters] = useState([]);

  const location = useLocation()

  const login = (userData) => {
    if (userData && userData.email === email && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  }

 useEffect(() => {
  if (access) {
    navigate('/home');
  }
  }, [access, navigate]);


  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        const isCharacterExists = characters.some((character) => character.id === data.id);
        if (isCharacterExists) {
          window.alert('Character already added!');
        } else {
          setCharacters((characters) => [...characters, data]);
        }
      } else {
        window.alert('No character found with this ID!');
      }
    });
  }

  function closeHandler(id) {
    setCharacters((characters) => characters.filter((character) => character.id !== id));
  }

  return (
    <div className='App'>
      {location.pathname !== '/' && <NavBar onSearch={onSearch} />}
      <Routes>
        {location.pathname !== '/' && (
          <>
            <Route path='/home' element={<Home onClose={closeHandler} characters={characters} />} />
            <Route path='/about' element={<About />} />
            <Route path='home/detail/:id' element={<Detail />} />
          </>
        )}
        <Route path='/' element={<Login logIn={login}/>} />
      </Routes>
    </div>
  );
}

export default App;
