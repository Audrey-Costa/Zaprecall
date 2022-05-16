import './Card.css'
import Seta from '../../assets/Images/Seta.svg'

export default function Card(props){
    return (
        <div className="card">
            <p className={props.class}>Pergunta {props.index + 1}</p> <img src={Seta} alt="Seguir" onClick={()=>props.function()}/>
        </div>
    )
}