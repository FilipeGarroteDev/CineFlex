import "./style.css"
import {useState, useEffect} from "react"
import Footer from "../Footer/Footer.js"
import { useParams } from "react-router-dom"
import axios from "axios"
import Form from "../Form/Form"



export default function SeatsPage({successObject, setSuccessObject, setSwitchHeader}){
  const {idSessao} = useParams();
  const[seatList, setSeatList] = useState([]);
  const[movie, setMovie] = useState([])
  const arrayAux = []

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
    promise.then(res => {
      setSeatList(res.data.seats)
      setMovie(res.data.movie)
    })
  }, [])
  

  return (
  <>
    <div className="subtitle">
      <h2>Selecione o horário</h2>
    </div>
    <div className="seats">
      <ul className="seatMaps">
      {seatList.map(({id, name, isAvailable}) => 
        isAvailable ? 
          <SeatAvailable key={id} name={name} id={id} isAvailable={isAvailable} arrayAux={arrayAux}/> 
        :
          <SeatUnavailable key={id} name={name}/>)
      }
      </ul>
      <div className="seatsSubtitle">
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
      </div>
    </div>
    <Form arrayAux={arrayAux} successObject={successObject} setSuccessObject={setSuccessObject} setSwitchHeader={setSwitchHeader}/>
    <Footer title={movie.title} posterURL={movie.posterURL}>
      <h6>{`${successObject.weekday} - ${successObject.session}`}</h6>  
    </Footer>
  </>
  )
}

function SeatAvailable({name, id, arrayAux}){
  const[seatClass, setSeatClass] = useState("seat")
  const[seatStatus, setSeatStatus] = useState(false)

  function createSeatsArray(){
    if(!seatStatus){
      setSeatClass("seat selected")
      if(arrayAux.filter(obj => obj.id === id).length === 0) arrayAux.push({id, name})
    } else {
      setSeatClass("seat")
      if(arrayAux.filter(obj => obj.id === id).length > 0){
        let index = arrayAux.findIndex(obj => obj.id === id)
        arrayAux.splice(index, 1)
        }
    }
  }

  return(
  <>
    <div className={seatClass} onClick={() => {
      setSeatStatus(!seatStatus)
      createSeatsArray()    
      }}>{name}</div> 
  </>
  )
}

function SeatUnavailable({name}){

  return(
  <>
    <div className="seat unavailable" onClick={() => alert("sai daí, jão")}>{name}</div> 
  </>
  )
}