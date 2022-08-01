import "./style.css"
import { useNavigate, useLocation, useParams } from "react-router-dom"

export default function Header({setSwitchHeader, parameter}){

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <header>
        <ion-icon name="arrow-undo-circle-outline" onClick={() => {
          navigate(-1)
          if(location.pathname === `/sessoes/${parameter}`){
            setSwitchHeader(false)
          }
        }}></ion-icon>
        <h1>CINEFLEX</h1>
      </header>
    </>
  )
}

