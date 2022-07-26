import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../../assets/css/reset.css"
import "./style.css"

export default function App(){
  return (
    <>
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieListing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}