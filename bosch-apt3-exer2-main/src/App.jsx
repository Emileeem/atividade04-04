import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { CardApi } from './components/CardApi'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        alert("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [page])

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")} class="btn1">Produtos</button>
      <button onClick={() => setShow("api")} class="btn2">API</button>
      <button onClick={() => setShow("map")} class="btn3">Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1 className={style.texto}>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.corpo}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="Procurar personagem" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.corpozao}>
            {data.map((item) => { 
             return(
              <div key={item.id} className='aqui'>
                <CardApi name={item.name} desc={item.species} value={item.gender} image={item.image}/>
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div>
              mapa aqui
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App
