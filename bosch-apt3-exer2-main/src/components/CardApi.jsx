import style from "../App.module.css"
export const CardApi = (props) => {
  const isAvailable = props.status === "True"
  const bolinhaStyle = isAvailable ? style.prodGreen : style.prodRed;

  return(
    <div className={style.bg2}>
        <p className={bolinhaStyle}></p>
          <h1 className={style.prod}>{props.name}</h1>
          <p className={style.valor}>{props.species}</p>
          <p className={style.valor}>{props.type}</p>
          <p className={style.valor}>{props.gender}</p>
          <img src={props.image} alt={props.name} width={150} height={"auto"} className={style.imagen}/>
      </div>
  )
}