import reactDom from 'react-dom';
import Container1 from './Container1'
import Container2 from './Container2';
import React from 'react'

function App(){
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

reactDom.render(<App/>, document.querySelector(".root"))
