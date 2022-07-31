import "./style.css"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Form(arrayAux){
  const [name, setName] = useState("")
  const [userDoc, setUserDoc] = useState("")

  function handleForm(event){
    event.preventDefault();
    const userObject ={
      name,
      userDoc,
      ids: arrayAux
    }

    console.log(userObject)

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