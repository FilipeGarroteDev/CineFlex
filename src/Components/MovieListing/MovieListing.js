import "./style.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function MovieListing({setSuccessObject}){ 
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies")
    promise.then((res) => {
      setMovies(res.data)
    })
  }, [])

  return (
    <>
      <div className="subtitle">
        <h2>Selecione o filme</h2>
      </div>
      <div className="movieContainer">
          {movies.length === 0 ? <h1>carregando...</h1> : movies.map(({posterURL, title, id}) => {
            return(
              <Movie key={id} posterURL={posterURL} title={title} id={id} setSuccessObject={setSuccessObject}/>
            )
          })}
      </div>
    </>
  )
}

function Movie({posterURL, title, id, setSuccessObject}){
  return(
    <Link to={`/sessoes/${id}`} onClick={() => {setSuccessObject({title})}}>
      <div className="movie">
        <img src={posterURL} alt={title}/>
      </div>
    </Link>
  )
}