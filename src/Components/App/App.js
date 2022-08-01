import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../../assets/css/reset.css"
import "./style.css"
import MovieListing from "../MovieListing/MovieListing"
import MovieSessions from "../MovieSessions/MovieSessions"
import SeatsPage from "../SeatsPage/SeatsPage"
import SuccessPage from "../SuccessPage/SuccessPage"
import Header from "../Header/Header"

export default function App(){
  const [movies, setMovies] = useState([])
  const [successObject, setSuccessObject] = useState({})
  const [switchHeader, setSwitchHeader] = useState(false)
  const [parameter, setParameter] = useState("")


  return (
    <>
      <BrowserRouter>
        {switchHeader ? 
          <Header setSwitchHeader={setSwitchHeader} parameter={parameter}/> 
        :
          <header>
            <h1>CINEFLEX</h1>
          </header>
        }
        <main>
          <Routes>
            <Route path="/" element={<MovieListing setSuccessObject={setSuccessObject} setSwitchHeader={setSwitchHeader}/> } />
            <Route path="/sessoes/:idFilme" element={<MovieSessions  movies={movies} setMovies={setMovies} successObject={successObject} setSuccessObject={setSuccessObject} setParameter={setParameter} parameter={parameter}/> }/>
            <Route path="/assentos/:idSessao" element={<SeatsPage successObject={successObject} setSuccessObject={setSuccessObject} setSwitchHeader={setSwitchHeader} setParameter={setParameter}/>} />
            <Route path="/sucesso" element={<SuccessPage successObject={successObject} setSuccessObject={setSuccessObject}/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}