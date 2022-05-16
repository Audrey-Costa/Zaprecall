import './Card.css'
import Seta from '../../assets/Images/Seta.svg'
import correct from '../../assets/Images/Correct.svg'
import almost from '../../assets/Images/Almost.svg'
import wrong from '../../assets/Images/Wrong.svg'

export default function Card(props){
    return (
        <div className="card">
            <p className={props.class}>Pergunta {props.index + 1}</p>
            {props.class === "" ? <img src={Seta} alt="Seguir" onClick={()=>props.function()}/> : (props.class === "correct" ? <img src={correct} alt="" /> : (props.class === "almost" ? <img src={almost} alt="" /> : <img src={wrong} alt="" />))}
        </div>
    )
}