export default function Message(props){
    return (
        <>
            <p><img src={props.src} alt={props.alt} /> {props.alt}!</p>
            <p>{props.text}</p>
        </>
    )
}