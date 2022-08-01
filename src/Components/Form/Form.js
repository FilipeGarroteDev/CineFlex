import "./style.css"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Form({selectedSeats, successObject, setSuccessObject, setSwitchHeader}){
  const [name, setName] = useState("")
  const [userDoc, setUserDoc] = useState("")
  const navigate = useNavigate();

  function handleForm(event){
    event.preventDefault();
    const userObject ={
      ids: selectedSeats.map(obj => obj.id),
      name,
      cpf: userDoc,
    }

    setSuccessObject({
      ...successObject,
      seat: selectedSeats.map(obj => obj.name),
      name,
      userDoc
    })

    if(selectedSeats.length === 0){
      alert("Você precisa selecionar os seus assentos!")
    } else {
       const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", userObject)
      promise.then((res) => {
      setName("");
      setUserDoc("");
      setSwitchHeader(false);
      selectedSeats = [];
      navigate("/sucesso")
      })
    }
   
  }

  return (
  <>
    <form onSubmit={handleForm}>
      {}
      <div>
        <p>Nome do Comprador:</p>
        <input type="text" placeholder="Digite seu nome..." value={name} onChange={(event) => setName(event.target.value)} required></input>
      </div>
      <div>
        <p>CPF do comprador:</p>
        <input type="text" pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})" placeholder="Digite seu CPF..." value={userDoc} onChange={(event) => setUserDoc(event.target.value)} required></input>
      </div>
      <button>Reservar assento(s)</button>
    </form>
  </>
  )
}
