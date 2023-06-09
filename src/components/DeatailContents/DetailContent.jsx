import style from './DetailContent.module.css';

const DetailContent = ({ character = {}}) => {
  return (
    <div className={style.container}>
      <div className={style.textCont}>
        <h1>{character.name}</h1>
        <h3>STATUS | {character.status}</h3>
        <h3>GENDER | {character.gender}</h3>
        <h3>SPECIE | {character.species}</h3>
        <h3>ORIGIN | {character.origin && character.origin.name}</h3>
      </div>
      <div className={style.imageCont}>
        <img className = {style.image}src={character.image} alt="Character" />
      </div>
    </div>
  );
};

export default DetailContent;