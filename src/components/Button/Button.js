import './Button.css'

export default function Button(props){
    return (
        <button className={props.class} onClick={()=>props.function(props.index)}>{props.text}</button>
    )
}