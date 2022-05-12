import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function Container2(props){
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>

            <button onClick={props.init}>Iniciar Recall!</button>
        </>
    )
}