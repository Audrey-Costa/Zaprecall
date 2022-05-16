import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import './Container2.css'
import React from 'react'

let questions = [{question: "O que é JSX?",answer: "Uma extensão de linguagem do JavaScript"}, {question: "O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces"}, {question: "Componentes devem iniciar com __ ", answer: "letra maiúscula"}, {question: "Podemos colocar __ dentro do JSX", answer: "expressões"}, {question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma"}, {question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"}, {question: "Usamos props para", answer: "passar diferentes informações para componentes"}, {question: "Usamos estado (state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]
    questions = questions.sort(compair)

function compair(){
    return Math.random() - 0.5
}

export default function Container2(props){

    const [card, setCard] = React.useState("close");
    const tempArr = [...questions];
    const [results, setResults] = React.useState(tempArr.fill(""));
    const [order, setOrder] = React.useState([...tempArr.fill("")]);
    const [counterCorrect, setCounterCorrect] = React.useState(0);
    const [counterIncorrect, setCounterIncorrect] = React.useState(0);
    function openQuestion(position){
        setCard(position)
    }

    function result(position, index){
        setCard("close")
        if(position === 0){
            results[index] = "wrong"
            order[counterCorrect + counterIncorrect] = "wrong"
            setCounterIncorrect(counterIncorrect + 1)
        }
        if(position === 1){
            results[index] = "almost"
            order[counterCorrect + counterIncorrect] = "almost"
            setCounterIncorrect(counterIncorrect + 1)
        }
        if(position === 2){
            results[index] = "correct"
            order[counterCorrect + counterIncorrect] = "correct"
            setCounterCorrect(counterCorrect + 1)
        }
    }

    let final = ["", ""]
    if(counterCorrect + counterIncorrect === results.length){
        final = [" finalFooter", " finalMain"]
    }


    return (
        <div className="container2">
            <Header/>
            <Main card={card} questions={questions} openQuestion={openQuestion} result={result} results={results} final={final}/>
            <Footer init={props.init} counterCorrect={counterCorrect} counterIncorrect={counterIncorrect} results={results} order={order} final={final}/>
        </div>
    )
}