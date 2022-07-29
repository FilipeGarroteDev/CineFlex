import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../../assets/css/reset.css"
import "./style.css"
import MovieListing from "../MovieListing/MovieListing"
import MovieSessions from "../MovieSessions/MovieSessions"
import SeatsPage from "../SeatsPage/SeatsPage"

export default function App(){


  return (
    <>
      <BrowserRouter>
        <header>
          <h1>CINEFLEX</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MovieListing />} />
            <Route path="/sessoes/:idFilme" element={<MovieSessions />} />
            <Route path="/assentos" element={<SeatsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}