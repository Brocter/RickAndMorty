import Cards from "../components/Cards/Cards";

const Home = (props) => {

    return(
       <div>
        <Cards onClose={props.onClose} characters={props.characters} />
       </div>
    )
}

export default Home;