import './Container1.css'
import logo from "../../assets/Images/image_1.png"




export default function Container1(props){
    return (
        <div className="app">
            <img src={logo} alt="ZapRecall"/>
            <h1>ZapRecall</h1>

            <input type="text" name="Deck" placeholder="Escolha um deck!" onChange={(event) => {props.deck(event)}} value={props.card}/>

            <input type="number" min={1} max={props.maxValue} name="Meta" placeholder="Qual a sua meta" onChange={(event) => {props.meta(event)}} value={props.metaPoints}/>
            
            <button onClick={()=>props.init(props.card)}>Iniciar Recall!</button>
        </div>
    )
}