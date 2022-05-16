import './Footer.css'
export default function Footer(props){
    return (
        <div className="footer">
            <button onClick={props.init}>Iniciar Recall!</button>
        </div>
    )
}