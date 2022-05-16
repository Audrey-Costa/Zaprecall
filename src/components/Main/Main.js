import './Main.css'
import Card from '../Card/Card.js'
import Questions from '../Questions/Questions.js'



export default function Main(props){

    return (
        <div className={"main" + props.final[1]}>
            {props.questions.map((question, index) => props.card === index ? <Questions key={index} index={index} questions={props.questions} answers={props.answers} function={(parameter)=>props.result(parameter, index)} card={props.card}/> : <Card key={index} index={index} class={props.results[index]} function={()=>props.openQuestion(index)}/>)}
        </div>
    )
}