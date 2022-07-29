import "./style.css"

export default function Footer({title, posterURL}){  
  return (
    <footer>
      <div className="movieIcon">
        <img src={posterURL} alt={title}/>
      </div>
      <h4>{title}</h4>
    </footer>  
  )
}