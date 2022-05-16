import './Header.css'
import logo from "../../assets/Images/image_1.png"

export default function Header(){
    return (
        <div className ="header">
            <img src={logo} alt="ZapCall" />
            <h1>ZapRecall</h1>
        </div>
        
    )
}