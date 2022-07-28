import "./style.css"
import Footer from "../Footer/Footer.js"
import React from "react"



export default function MovieSessions(){

  let x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]


  return (<>
    <div className="subtitle">
      <h2>Selecione o horário</h2>
    </div>
    <div className="seats">
      <ul className="seatMaps">
        {x.map(value => 
          <>
            <div className="seat">{value}</div>
          </>)}
      </ul>
      
    </div>
    <Footer />
  </>)
}