import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import './Container2.css'


export default function Container2(props){
    return (
        <div className="container2">
            <Header/>
            <Main/>
            <Footer init={props.init}/>
        </div>
    )
}