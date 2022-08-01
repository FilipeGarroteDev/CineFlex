import "./style.css"
import {useState, useEffect} from "react"
import Footer from "../Footer/Footer.js"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

export default function MovieSessions({movies, setMovies, successObject, setSuccessObject, setParameter, parameter}){
  const {idFilme} = useParams()
  const [timetable, setTimetable] = useState([])


  useEffect(() => {
    setParameter(idFilme)
    const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)
    promise.then((res) => {
      setMovies(res.data)
      setTimeout(() => setTimetable(res.data.days), 350)
    })
  }, [idFilme, setMovies, setTimetable, setParameter])

  return (
  <div className="wrapper">
    <div className="subtitle">
      <h2>Selecione o horário</h2>
    </div>
    <div className="sessions">
      {timetable.length === 0 ? 
        <div className="loading">
          <img src="https://img.freepik.com/vetores-premium/pipoca-em-vetor-de-desenho-de-balde-listrado-ilustracao-em-um-fundo-branco_223337-4014.jpg?w=2000" alt="popcorn"/>
          <h1>Carregando...</h1> 
        </div>
        :
          timetable.map(({weekday, date, id, showtimes: [{name: firstSession, id: firstSessionId}, {name: lastSession, id: lastSessionId}]}) => {
          return (
          <Session
            key = {id} 
            weekday={weekday} 
            date={date} 
            firstSession={firstSession} 
            firstSessionId={firstSessionId} 
            lastSession={lastSession} 
            lastSessionId ={lastSessionId}
            movieId={movies.id}
            successObject={successObject}
            setSuccessObject={setSuccessObject}
          />)
      })}
    </div>
    <Footer title={movies.title} posterURL={movies.posterURL} />
  </div>
  )
}

function Session(
  {weekday,
  date,
  firstSession,
  lastSession,
  firstSessionId,
  lastSessionId,
  successObject,
  setSuccessObject
  }){

  return (
    
      <div className="session">
        <h3>{`${weekday} - ${date}`}</h3>
        <div className="schedule">
          <Link to={`/assentos/${firstSessionId}`} onClick={() => {setSuccessObject({
            ...successObject,
            date,
            session: firstSession,
            weekday
          })}}>
            <div className="timeSession">{firstSession}</div>
          </Link>
          <Link to={`/assentos/${lastSessionId}`}  onClick={() => {setSuccessObject({
            ...successObject,
            date,
            session: lastSession,
            weekday
          })}}>
            <div className="timeSession">{lastSession}</div>
          </Link>
        </div>
      </div>
    
  )
}