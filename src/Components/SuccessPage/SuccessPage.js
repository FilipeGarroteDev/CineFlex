import "./style.css"
import { useNavigate } from "react-router-dom"


export default function SuccessPage({successObject, setSuccessObject}){
  const {
    title,
    date,
    session,
    seat,
    name,
    userDoc
  } = successObject

  const navigate = useNavigate()

  return (
    <div className="wrapper">
      <div className="successSubtitle">
        <h2>Pedido feito com sucesso!</h2>
      </div>
      <DetailsSection sectionClass="sessionDetails" sectionTitle="Filme e sessão" firstInfo={title} secondInfo={`${date} ${session}`}/>
      <DetailsSection sectionClass="seatsDetails" sectionTitle="Assentos">
        <Tickets seat={seat}/>
      </DetailsSection>
      <DetailsSection sectionClass="userDetails" sectionTitle="Comprador" firstInfo={`Nome: ${name}`} secondInfo={`CPF: ${userDoc}`}/>
      <button onClick={() =>{ 
        setSuccessObject({})
        navigate("/")
        }}>Voltar pra Home</button>
    </div>
  )
}

function DetailsSection({sectionClass, sectionTitle, firstInfo, secondInfo, children}){
  return (
    <section className={sectionClass}>
      <h3>{sectionTitle}</h3>
      {children}
      <span>{firstInfo}</span>
      <span>{secondInfo}</span>
    </section>
  )
}

function Tickets({seat}){
  return (
    <>
      {seat
      .sort((a, b) => a-b)
      .map((position) => <span key={position}>Assento {position}</span>)
      }
    </>
  )
}