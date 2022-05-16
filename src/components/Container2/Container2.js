import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import './Container2.css'
import React from 'react'



export default function Container2(props){
    const questions = ["O que é JSX?", "O React é __ ", "Componentes devem iniciar com __ ", "Podemos colocar __ dentro do JSX", "O ReactDOM nos ajuda __ ", "Usamos o npm para __", "Usamos props para", "Usamos estado (state) para __ "]
    const answers = ["Uma extensão de linguagem do JavaScript", "uma biblioteca JavaScript para construção de interfaces", "letra maiúscula", "expressões", "interagindo com a DOM para colocar componentes React na mesma", "gerenciar os pacotes necessários e suas dependências", "passar diferentes informações para componentes", "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"]

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
            console.log("Hi, it's me!", index)
            results[index] = "wrong"
            order[counterCorrect + counterIncorrect] = "wrong"
            setCounterIncorrect(counterIncorrect + 1)
            console.log(results)
        }
        if(position === 1){
            console.log("Hi, it's you!", index)
            results[index] = "almost"
            order[counterCorrect + counterIncorrect] = "almost"
            setCounterIncorrect(counterIncorrect + 1)
            console.log(results)
        }
        if(position === 2){
            console.log("Hi, it's SHEEEE!", index)
            results[index] = "correct"
            order[counterCorrect + counterIncorrect] = "correct"
            setCounterCorrect(counterCorrect + 1)
            console.log(results)
        }
    }

    let final = ["", ""]
    if(counterCorrect + counterIncorrect === results.length){
        final = [" finalFooter", " finalMain"]
    }


    return (
        <div className="container2">
            <Header/>
            <Main card={card} questions={questions} answers={answers} openQuestion={openQuestion} result={result} results={results} final={final}/>
            <Footer init={props.init} counterCorrect={counterCorrect} counterIncorrect={counterIncorrect} results={results} order={order} final={final}/>
        </div>
    )
}