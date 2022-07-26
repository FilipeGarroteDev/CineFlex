import "./style.css"

export default function MovieSessions(){  
  return (<>
    <div className="subtitle">
      <h2>Selecione o horário</h2>
    </div>
    <div className="sessions">
      <div className="session">
        <h3>Quinta-feira - 24/06/2021</h3>
        <div className="schedule">
          <div className="timeSession">15:00</div>
          <div className="timeSession">19:00</div>
        </div>
      </div>
      <div className="session">
        <h3>Sexta-feira - 25/06/2021</h3>
        <div className="schedule">
          <div className="timeSession">15:00</div>
          <div className="timeSession">19:00</div>
        </div>
      </div>
    </div>
    <footer>
      <div className="movieIcon">
        <img src="https://miro.medium.com/max/1400/1*AIMRcE2kVKCFlx8vVSrU9w.jpeg" alt="bacurau"/>
      </div>
      <h4>Bacurau</h4>
    </footer>
  </>)
}