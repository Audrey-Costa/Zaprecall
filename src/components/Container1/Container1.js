import './Container1.css'
import logo from "../../assets/Images/image_1.png"




export default function Container1(props){
    return (
        <div className="app">
            <img src={logo} alt="ZapRecall"/>
            <h1>ZapRecall</h1>
            <input type="text" name="firstName" placeholder="Escolha um deck!" onChange={(event) => {props.change(event)}} value={props.card}/>
            <button onClick={()=>props.init(props.card)}>Iniciar Recall!</button>
        </div>
    )
}