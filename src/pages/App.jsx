import { useEffect, useState } from "react";

import logo from "../assets/WhatsApp Image 2023-08-31 at 16.50.01.jpeg";
// import iconSearch from"../assets/pixelarticons_menu.svg"
import searchIcon from "../assets/search.svg";

import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

import "./App.css";
import MovieCard from "../components/movieCard/movieCard";
import Footer from "../components/footer/footer";
import Menu from "../menu/menu";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const[isMenu, setIsMenu] =useState(false)
  const [movies, setMovies] = useState([]);

  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com//?apiKey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };
  // fetch(apiUrl).then((response) => response.json()).then((data) => console.log(data));
  const toggleMenu =()=>{
    setIsMenu(!isMenu)
  }
  return (
    <div id="app">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="linha">
        <div className="searchBar">
      <ion-icon name="menu" onClick={toggleMenu}/>
      {isMenu &&<Menu click={toggleMenu}/>}
      <div className="search">
        {/* <img className="icon" src={iconSearch} 
        alt="Icone de Variedade de Filmes" 
      onClick={() => searchMovies(searchDerb)} /> */}
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Pesquise Aqui"
          />
        <img
          src={searchIcon}
          alt="Icone de pesquisa"
          onClick={() => searchMovies(searchTerm)}
          />
          </div>
      </div>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movies={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado😢</h2>
        </div>
      )}
      <Footer link={"https:github.com.br"}>Rabaka</Footer>
    </div>
  );
};

export default App;
