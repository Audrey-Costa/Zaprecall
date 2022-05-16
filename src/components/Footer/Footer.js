import './Footer.css'
import Icons from '../Icons/Icons'
import Message from '../Message/Message'
import Parabens from '../../assets/Images/party.png'
import Putz from '../../assets/Images/sad.png'
import correct from '../../assets/Images/Correct.svg'
import almost from '../../assets/Images/Almost.svg'
import wrong from '../../assets/Images/Wrong.svg'

export default function Footer(props){
    return (
        <div className={"footer" + props.final[0]}>
            {props.counterCorrect + props.counterIncorrect !== props.results.length ? "" :
 (props.counterCorrect === props.results.length) ? <Message src={Parabens} alt={"Parabéns"} text={"Você não esqueceu de nenhum flashcard!"}/> : <Message src={Putz} alt={"Putz..."} text={"Ainda faltam alguns...Mas não desanime!"}/>
            }
            <div className="progress">
                <p>{props.counterCorrect + props.counterIncorrect} / {props.results.length} Concluídos</p>
                <Icons>
                    {props.order.map((element, index) => element === "correct" ? <img key={index} src={[correct]} alt={element}/> : ( element === "almost" ? <img key={index} src={[almost]} alt={element}/> : ( element === "wrong" ? <img key={index} src={[wrong]} alt={element}/> : "")))}
                </Icons>
            </div>
           {props.counterCorrect+ props.counterIncorrect !== props.results.length ? "" : <button onClick={props.init}>Reiniciar Recall!</button>}
        </div>
    )
}