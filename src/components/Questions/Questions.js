import Question from "../Question/Question"
import Answer from "../Answer/Answer"
import './Questions.css'
import react from "react"

export default function Questions(props){
    const [turn, setTurn] = react.useState(["", " back"])
    function toogle(){
        turn.reverse()
        let arrayTemp = [...turn]
        setTurn(arrayTemp)
    }
    return (
        <div className="questions">
            <Answer answers={props.answers} index={props.index} turn={turn} function={(parameter) => props.function(parameter, props.index)}/>
            <Question questions={props.questions} index={props.index} turn={turn} function={()=>toogle()}/>
        </div>
    )
}
