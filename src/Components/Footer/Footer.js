import "./style.css"

export default function Footer({title, posterURL, children}){  
  return (
    <footer>
      <div className="movieIcon">
        <img src={posterURL} alt={title}/>
      </div>
      <div>
        <h4>{title}</h4>
        {children}
      </div>
    </footer>  
  )
}