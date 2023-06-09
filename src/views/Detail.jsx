import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DetailContent from '../components/DeatailContents/DetailContent'

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
      });
  }, [id]);

 

  return (
    <>
      <DetailContent character={{...character,character}} />
    </>
  );
};

export default Detail;