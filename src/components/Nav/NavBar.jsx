import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'
import { Link } from "react-router-dom";

const NavBar = (props) => {
    const {onSearch} = props;


    return(
        <div className= {style.container}>
            <Link to= '/home'>
                <button>Home</button>
            </Link>
            <Link to= '/about'>
                <button>About</button>
            </Link>
            <SearchBar onSearch = {onSearch}/>
        </div>
    );
}

export default NavBar