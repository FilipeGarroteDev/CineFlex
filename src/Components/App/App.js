import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../../assets/css/reset.css"
import "./style.css"
import MovieListing from "../MovieListing/MovieListing"
import MovieSessions from "../MovieSessions/MovieSessions"

export default function App(){
  return (
    <>
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieListing />} />
          <Route path="/sessoes" element={<MovieSessions />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}