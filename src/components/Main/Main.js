import './Main.css'
import Card from '../Card/Card.js'
import Questions from '../Questions/Questions.js'
import React from 'react'



export default function Main(){
    const questions = ["O que é JSX?", "O React é __ ", "Componentes devem iniciar com __ ", "Podemos colocar __ dentro do JSX", "O ReactDOM nos ajuda __ ", "Usamos o npm para __", "Usamos props para", "Usamos estado (state) para __ "]
    const answers = ["Uma extensão de linguagem do JavaScript", "uma biblioteca JavaScript para construção de interfaces", "letra maiúscula", "expressões", "interagindo com a DOM para colocar componentes React na mesma", "gerenciar os pacotes necessários e suas dependências", "passar diferentes informações para componentes", "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"]

    const [card, setCard] = React.useState("close")
    const tempArr = [...questions]
    const [results, setResullts] = React.useState(tempArr.fill(""))
    function openQuestion(position){
        setCard(position)
    }

    function result(position, index){
        setCard("close")
        if(position === 0){
            console.log("Hi, it's me!", index)
            results[index] = "wrong"
        }
        if(position === 1){
            console.log("Hi, it's you!", index)
            results[index] = "almost"
        }
        if(position === 2){
            console.log("Hi, it's SHEEEE!", index)
            results[index] = "correct"
        }
    }

    return (
        <div className="main">
            {questions.map((question, index) => card === index ? <Questions key={index} index={index} questions={questions} answers={answers} function={(parameter)=>result(parameter, index)} card={card}/> : <Card key={index} index={index} class={results[index]} function={()=>openQuestion(index)}/>)}
        </div>
    )
}