/* eslint-disable react/prop-types */
import style from "../App.module.css"
export const Card = (props) => {
  const isAvailable = props.status === "True"
  const bolinhaStyle = isAvailable ? style.prodGreen : style.prodRed;

  return(
    <div className={style.bg}>
        <p className={bolinhaStyle}></p>
          <h1 className={style.prod}>{props.name}</h1>
          <h2 className={style.desc}>{props.desc}</h2>
          <p className={style.valor}>{props.value}</p>
          <img src={props.image} alt={props.name} width={150} height={"auto"} className={style.imagen}/>
      </div>
  )
}