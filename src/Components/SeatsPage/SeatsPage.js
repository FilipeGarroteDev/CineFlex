import "./style.css"
import {useState, useEffect} from "react"
import Footer from "../Footer/Footer.js"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"



export default function SeatsPage(){
  const {idSessao} = useParams();
  const[seatList, setSeatList] = useState([]);
  const[movie, setMovie] = useState([])

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
    promise.then(res => {
      setSeatList(res.data.seats)
      setMovie(res.data.movie)
    })
  }, [])
  


  return (<>
    <div className="subtitle">
      <h2>Selecione o horário</h2>
    </div>
    <div className="seats">
      <ul className="seatMaps">
      {seatList.map(({id, name, isAvailable}) => <Seat key={id} name={name} isAvailable={isAvailable}/>)}
      </ul>
      
      <label className="seatsSubtitle">
        <div className="option">
          <div className="seat selected"></div>
          <span>Selecionado</span>
        </div>
        <div className="option">
          <div className="seat"></div>
          <span>Disponível</span>
        </div>
        <div className="option">
          <div className="seat unavailable"></div>
          <span>Indisponível</span>
        </div>
      </label>
    </div>
    <Footer title={movie.title} posterURL={movie.posterURL}/>
  </>)
}

function Seat({id, name, isAvailable}){
  const[seatStatus, setSeatStatus] = useState(false)
  const[seatClass, setSeatClass] = useState("seat")


  return(
  <>
    <div className="seat" onClick={() => setSeatStatus(!seatStatus)}>{name}</div> 
  </>
  )
    

}

// function Seat({seatList}){
//   const[seatStatus, setSeatStatus] = useState(false)
//   const[seatClass, setSeatClass] = useState("seat")


//   return(
//   <>
//       seat.isAvailable ? 
//         <div key={seat.id} className="seat" onClick={() => setSeatStatus(!seatStatus)}>{seat.name}</div> 
//       : 
//         <div key={seat.id} className="seat unavailable" onClick={() => alert("esse assento não, jão!")}>{seat.name}</div>
//   </>
//   )
    

// }