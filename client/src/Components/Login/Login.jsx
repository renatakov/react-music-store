import s from "./Login.module.css"
import { useRef } from "react"
import { Link } from "react-router-dom"
import img1 from "../../images/authorizaion/dl.beatsnoop 1.png"
const Login = (props) => {
    console.log(props)
    const inputEmail = useRef(null)
    const inputPassword = useRef(null)
    const loginBtn = () => {
        const loginFilter = props.accounts.filter((acc)=>{
            if(inputEmail.current.value == acc.email && inputPassword.current.value == acc.password){
                console.log("loggined")
                sessionStorage.setItem("userEmail", acc.email)
                sessionStorage.setItem("userPassword", acc.password)
                sessionStorage.setItem("userAuthKey", acc.auth_key)


            }
        })
    }
    return(
        <section className={s.loginSection}>
            <img src={img1} alt="" />
            <div className={s.loginSection__block}>
                <h2>Login To Exclusive</h2>
                <p>Enter your details below</p>
                <input ref={inputEmail} type="email" placeholder="Email"/>
                <input ref={inputPassword} type="password" placeholder="Password"/>
                <button onClick={loginBtn}>
                    <Link to="/">Login</Link>
                    </button>
            </div>
        </section>
    )
}
export default Login