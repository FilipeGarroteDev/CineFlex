import "./style.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function MovieListing({setSuccessObject, setSwitchHeader}){ 
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies")
    promise.then((res) => {
      setTimeout(() => setMovies(res.data), 350)
    })
  }, [])

  return (
    <>
      <div className="subtitle">
        <h2>Selecione o filme</h2>
      </div>
      <div className="movieContainer">
          {movies.length === 0 ? 
            <div className="loading">
              <img src="https://img.freepik.com/vetores-premium/pipoca-em-vetor-de-desenho-de-balde-listrado-ilustracao-em-um-fundo-branco_223337-4014.jpg?w=2000" alt="popcorn"/>
              <h1>Carregando...</h1> 
            </div>
            : 
            movies.map(({posterURL, title, id}) => {
              return(
                <Movie key={id} posterURL={posterURL} title={title} id={id} setSuccessObject={setSuccessObject} setSwitchHeader={setSwitchHeader}/>
              )
            })}
      </div>
    </>
  )
}

function Movie({posterURL, title, id, setSuccessObject, setSwitchHeader}){
  return(
    <Link to={`/sessoes/${id}`} onClick={() => {
      setSwitchHeader(true)
      setSuccessObject({title})
      }}>
      <div className="movie">
        <img src={posterURL} alt={title}/>
      </div>
    </Link>
  )
}