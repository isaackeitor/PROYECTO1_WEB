import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import MovieCard from "./components/MovieCard";
import moviesData from "./components/MoviesData";
import Footer from "./components/Footer";
import posters from "./components/Posters";
import peliculas from "./components/Peliculas";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="fondo">
          <Carousel /> 
          <br></br>
          <br></br>
          <br></br>
          <p style={{ fontSize: "16px" }} className="caption"><b>Solo en HBO Max.</b></p>
          <p style={{ color: "#D3D3D3" }} className="caption">Streaming exclusivo del mejor contenido, solo aqui.</p>
          <div className="margen0">
            <div className="fila6">
              {moviesData.map((movie) => (
                <div key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="left-column">
              <img src="https://pbs.twimg.com/media/FqObBuwXoAAzcYs.jpg" className="img-fluid imgdiv2" />
            </div>
            <div className="right-column">
              <div className= "margen">
                <h2 className="captionDIV">Peliculas de exito, programas y mucho mas.</h2>
                <p className="captionDIV">Las mejores peliculas e television e iconicas, incluyendo HBO y MAX Originals, la experiencia de los ninos seleccionados y mucho mas.</p>
                <button class="hbo-button"><b>👻 SUSCRIBIRSE AHORA</b></button>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <p style={{ fontSize: "16px" }} className="caption"><b>Ver episodios gratis.</b></p>
          <p style={{ color: "#D3D3D3" }} className="caption">Episodios de muestra de las series mas populares de nuestra biblioteca.</p>
          <div className="margen0">
            <div className="fila6">
              {peliculas.map((movie) => (
                <div key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
          <br></br>
          <br></br>
          <p style={{ fontSize: "16px" }} className="caption"><b>Para fans por fans.</b></p>
          <p style={{ color: "#D3D3D3" }} className="caption">Colecciones especialesecopiladas por aquellos que mejor saben.</p>
          <div className="margen0">
            <div className="fila6">
              {moviesData.map((movie) => (
                <div key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="column-left">
              <h2 className="captionDIV2">Dale play a la diversion.</h2>
              <p className="captionDIV2">Se parte de los universos de Warner Bros., DC Comics, HBO, Cartoon Network, y mucho mas.</p>
              <div className="margen2">  
                <button class="hbo-button"><b>👻 ESCOGE UNA</b></button>
              </div>
            </div>
            <div className="column-right">
              <img src="https://i.pinimg.com/originals/e7/0e/b5/e70eb5529e8031ddcead66101b3de583.jpg" className="img-fluid imgdiv2" />
            </div>
          </div>
          <br></br>
          <br></br>
          <p style={{ fontSize: "16px" }} className="caption"><b>HBO Max HUBS</b></p>
          <div className="margen0">
            <div className="fila4">
              {posters.map((movie) => (
                <div key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
          <br></br>
          <br></br>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;