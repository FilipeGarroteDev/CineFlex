import "./style.css"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Form({arrayAux, successObject, setSuccessObject}){
  const [name, setName] = useState("")
  const [userDoc, setUserDoc] = useState("")
  const navigate = useNavigate();

  function handleForm(event){
    event.preventDefault();
    const userObject ={
      ids: arrayAux.map(obj => obj.id),
      name,
      cpf: userDoc,
    }

    setSuccessObject({
      ...successObject,
      seat: arrayAux.map(obj => obj.name),
      name,
      userDoc
    })

    const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", userObject)
    promise.then((res) => {
      navigate("/sucesso")
    })
  }

  return (
  <>
    <form onSubmit={handleForm}>
      <div>
        <p>Nome do Comprador:</p>
        <input type="text" placeholder="Digite seu nome..." value={name} onChange={(event) => setName(event.target.value)}></input>
      </div>
      <div>
        <p>CPF do comprador:</p>
        <input type="number" placeholder="Digite seu CPF..." value={userDoc} onChange={(event) => setUserDoc(event.target.value)}></input>
      </div>
      <button>Reservar assento(s)</button>
    </form>
  </>
  )
}