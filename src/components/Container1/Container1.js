import './Container1.css'
import logo from "../../assets/Images/image_1.png"
export default function Container1(props){
    return (
        <div className="app">
            <img src={logo} alt="ZapRecall"/>
            <h1>ZapRecall</h1>
            <button onClick={props.init}>Iniciar Recall!</button>
        </div>
    )
}