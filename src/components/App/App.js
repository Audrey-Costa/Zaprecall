import React from 'react';
import Container1 from '../Container1/Container1';
import Container2 from '../Container2/Container2';
import "../../assets/style.css"

alert("Escolha um dos decks 'React JSX' ou 'XGH'")

export default function App(){
    let reactJsx = [{question: "O que é JSX?",answer: "Uma extensão de linguagem do JavaScript"}, {question: "O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces"}, {question: "Componentes devem iniciar com __ ", answer: "letra maiúscula"}, {question: "Podemos colocar __ dentro do JSX", answer: "expressões"}, {question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma"}, {question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"}, {question: "Usamos props para", answer: "passar diferentes informações para componentes"}, {question: "Usamos estado (state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}];

    let XGH = [{question: "__, não é XGH.", answer: "Pensou"},{question: " Existem 3 formas de se resolver um problema, a correta, a errada e __", answer: "a XGH, que é igual à errada, só que mais rápida."},{question: "Quanto mais XGH você faz,__", answer: "mais precisará fazer."},{question: "XGH é totalmente __",answer: "reativo"},{question: "No XGH vale tudo, __",answer: "menos refatorar"},{question: "Commit __ de update.",answer: "sempre antes"},{question: "XGH não tem __",answer: "prazo."},{question: " Esteja preparado para pular fora quando o barco começar a afundar…",answer: "ou coloque a culpa em alguém ou algo."},{question: "__ XGH não respeita padrões.",answer: "Seja autentico"},{question: "Não existe refactoring,",answer: "apenas rework."},{question: "XGH é totalmente __",answer: "anárquico."},{question: " Se iluda sempre com __ melhorias.",answer: "promessas de"},{question: " XGH é absoluto, __",answer: "não se prende à coisas relativas."},{question: "XGH é __",answer: "atemporal."},{question: "XGH nem sempre __",answer: "é POG."}, {question: "Não tente __",answer: "remar contra a maré"},{question: "O XGH não é perigoso __",answer: "até surgir um pouco de ordem."},{question: "O XGH é seu brother, __",answer: "mas é vingativo."},{question: "Se tiver funcionando, __",answer: "não rela a mão."},{question: " Teste __ os fracos.",answer: "é para"},{question: "Acostume-se ao sentimento de",answer: "fracasso iminente."},{question: "O problema só é seu quando?",answer: "Seu nome está no Doc da classe."}]
    reactJsx = reactJsx.sort(compair)
    XGH = XGH.sort(compair)
    function compair(){
        return Math.random() - 0.5
    }

    const [start, setStart] = React.useState("home")
    const [text, setText] = React.useState("")
    const [card, setCard] = React.useState("")
    function change(event){
        setCard(event.target.value)
        setText(card)
    }

    function init(){
        if(start === "home" && (card === "React JSX" || card === "XGH")){
            (setStart("Zap"))
            if(card === "React JSX"){
                setText(reactJsx)
            }else if(card === "XGH"){
                setText(XGH)
            }
        }else{
            setStart("home")
        }
    }
    return (
        (start === "home") ? <Container1 className="app"  init={init} change={change} card={card}/> : <Container2  init={init} text={text}/>
    )
}