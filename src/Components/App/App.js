import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../../assets/css/reset.css"
import "./style.css"
import MovieListing from "../MovieListing/MovieListing"
import MovieSessions from "../MovieSessions/MovieSessions"
import SeatsPage from "../SeatsPage/SeatsPage"
import SuccessPage from "../SuccessPage/SuccessPage"

export default function App(){
  const [movies, setMovies] = useState([])
  const [successObject, setSuccessObject] = useState({})


  return (
    <>
      <BrowserRouter>
        <header>
          <h1>CINEFLEX</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MovieListing setSuccessObject={setSuccessObject}/>} />
            <Route path="/sessoes/:idFilme" element={<MovieSessions  movies={movies} setMovies={setMovies} successObject={successObject} setSuccessObject={setSuccessObject}/>} />
            <Route path="/assentos/:idSessao" element={<SeatsPage successObject={successObject} setSuccessObject={setSuccessObject} />} />
            <Route path="/sucesso" element={<SuccessPage successObject={successObject}/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}