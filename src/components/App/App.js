import React from 'react';
import Container1 from '../Container1/Container1';
import Container2 from '../Container2/Container2';
import "../../assets/reset.css"
import "../../assets/style.css"

export default function App(){
    const [start, setStart] = React.useState("home")
    function init(){
        if(start==="home"){
            setStart("Zap")
        }else{
            setStart("home")
        }
    }
    return (
        (start === "home") ? <Container1 className="app"  init={init}/> : <Container2  init={init}/>
    )
}