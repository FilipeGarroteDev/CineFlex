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
  const [errorMessage, setErrorMessage] = useState("errorMessage hidden");
  const [selectedSeats, setSelectedSeats] = useState([])


  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
    promise.then(res => {
      setSeatList(res.data.seats)
      setMovie(res.data.movie)
    })
  }, [idSessao])
  

  return (
  <div className="wrapper">
    <div className="subtitle">
      <h2>Selecione os assento(s)</h2>
    </div>
    <div className={errorMessage}>
      <ion-icon name="alert-circle-outline"></ion-icon>
      <p>Infelizmente, esse assento não está disponível. Escolha outro assento!</p>
    </div>
    <div className="seats">
      <ul className="seatMaps">
      {seatList.length === 0 ? 
        <div className="loading">
          <img src="https://img.freepik.com/vetores-premium/pipoca-em-vetor-de-desenho-de-balde-listrado-ilustracao-em-um-fundo-branco_223337-4014.jpg?w=2000" alt="popcorn"/>
          <h1>Carregando...</h1> 
        </div>
        :
        seatList.map(({id, name, isAvailable}) => 
        isAvailable ? 
          <SeatAvailable key={id} name={name} id={id} isAvailable={isAvailable} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/> 
        :
          <SeatUnavailable key={id} name={name} setErrorMessage={setErrorMessage} errorMessage={errorMessage}/>)
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
    <Form selectedSeats={selectedSeats} successObject={successObject} setSuccessObject={setSuccessObject} setSwitchHeader={setSwitchHeader}/>
    <Footer title={movie.title} posterURL={movie.posterURL}>
      <h6>{`${successObject.weekday} - ${successObject.session}`}</h6>  
    </Footer>
  </div>
  )
}

function SeatAvailable({name, id, selectedSeats, setSelectedSeats}){
  const[seatClass, setSeatClass] = useState("seat")
  const[seatStatus, setSeatStatus] = useState(false)

  function createSeatsArray(){
    if(!seatStatus){
      setSeatClass("seat selected")
      if(selectedSeats.filter(obj => obj.id === id).length === 0) setSelectedSeats([...selectedSeats, {name, id}])
    } else {
      setSeatClass("seat")
      if(selectedSeats.filter(obj => obj.id === id).length > 0){
          let indexAux = selectedSeats.findIndex(obj => obj.id === id);
          let filteredAux = selectedSeats.filter((pos, index) => index !== indexAux)
          setSelectedSeats(filteredAux)
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

function SeatUnavailable({name, setErrorMessage, errorMessage}){

  return(
  <>
    <div className="seat unavailable" onClick={() => {
      if(errorMessage === "errorMessage hidden"){
        setErrorMessage("errorMessage");
        setTimeout(() => setErrorMessage("errorMessage hidden"), 1500)
      }      
      }}>{name}</div> 
  </>
  )
}