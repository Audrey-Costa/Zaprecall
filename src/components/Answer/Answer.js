import './Answer.css'
import Button from '../Button/Button'

export default function Answer(props){
    const buttons = [{text: "Não lembrei", result: "wrong"}, {text: "Quase não lembrei", result: "almost"}, {text: "Zap!", result: "correct"}]
    return (
        <div className={"answer" + props.turn[1]} >
            <p>{props.answers[props.index].answer}</p> 
            {buttons.map((element, index) => <Button key={index} text={element.text} class={element.result} index={index} function={(parameter) => props.function(parameter, props.index)}/>)}
        </div>
    )
}