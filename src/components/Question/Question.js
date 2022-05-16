import './Question.css'
import Giro from "../../assets/Images/Giro.svg"

export default function Question(props){
    return (
        <div className={"question" + props.turn[0]}>
            <p>{props.questions[props.index]}</p> 
            <img src={Giro} alt="girar" onClick={()=>props.function()}/>
        </div>
    )
}