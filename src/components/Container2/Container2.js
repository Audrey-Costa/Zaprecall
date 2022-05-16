import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import './Container2.css'
import React from 'react'

export default function Container2(props){
    
    const questions = props.text
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
            setCounterCorrect(counterCorrect + 1)
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
            <Footer init={props.init} counterCorrect={counterCorrect} counterIncorrect={counterIncorrect} results={results} order={order} final={final} metaPoints={props.metaPoints}/>
        </div>
    )
}