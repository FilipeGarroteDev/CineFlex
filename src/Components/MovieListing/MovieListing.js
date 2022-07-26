import "./style.css"

export default function MovieListing(){  
  return (<>
    <div className="subtitle">
      <h2>Selecione o filme</h2>
    </div>
    <div className="movieContainer">
      <div className="movie">
        <img src="https://miro.medium.com/max/1400/1*AIMRcE2kVKCFlx8vVSrU9w.jpeg" alt="bacurau"/>
      </div>
      <div className="movie">
        <img src="https://img.elo7.com.br/product/original/269D300/big-poster-nos-filme-lo01-tamanho-90x60-cm-presente-geek.jpg" alt="nós"/>
      </div>
      <div className="movie">
        <img src="https://www.kinoplex.com.br/filmes/images/cartaz/262x388/thor-amor-e-trovao.jpg?1653426820" alt="thor"/>
      </div>
      <div className="movie">
        <img src="https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg" alt="telefone"/>
      </div>
      <div className="movie">
        <img src="https://www.kinoplex.com.br/filmes/images/cartaz/262x388/lightyear.jpg?1652203222" alt="buzz"/>
      </div>
      <div className="movie">
        <img src="https://img.elo7.com.br/product/original/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg" alt="capita"/>
      </div>
    </div>
  </>)
}