import "./style.css"
import {useState, useEffect} from "react"
import Footer from "../Footer/Footer.js"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

export default function MovieSessions(){
  const {idFilme} = useParams()
  const [timetable, setTimetable] = useState([])

  console.log(timetable)

  useEffect(() => {
    
    const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)
    promise.then((res) => {
      setTimetable(res.data.days)
    })
  }, [])

  return (<>
    <div className="subtitle">
      <h2>Selecione o horário</h2>
    </div>
    <div className="sessions">
      {timetable.map(({weekday, date, id, showtimes: [{name: firstSession, id: firstSessionId}, {name: lastSession, id: lastSessionId}]}) => {
          return (<Session
            key = {id} 
            weekday={weekday} 
            date={date} 
            firstSession={firstSession} 
            firstSessionId={firstSessionId} 
            lastSession={lastSession} 
            lastSessionId ={lastSessionId}
          />)
      })}
    </div>
    <Footer />
  </>)
}

function Session(
  {weekday,
  date,
  firstSession,
  lastSession}){

  return (
    
      <div className="session">
        <h3>{`${weekday} - ${date}`}</h3>
        <div className="schedule">
          <Link to="/assentos">
            <div className="timeSession">{firstSession}</div>
          </Link>
          <Link to="/assentos">
            <div className="timeSession">{lastSession}</div>
          </Link>
        </div>
      </div>
    
  )
}