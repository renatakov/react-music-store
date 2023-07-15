import s from "./Login.module.css"
import { useRef } from "react"
import { Link } from "react-router-dom"
import img1 from "../../images/authorizaion/dl.beatsnoop 1.png"
const Login = (props) => {
    // console.log(props)
    // const inputEmail = useRef(null)
    // const inputPassword = useRef(null)
    // const handleLoginBtn = () =>{
    //     const email = inputEmail.current.value
    //     const password = inputPassword.current.value
    //     props.loginToAccount(email, password)
    //     console.log(props.accounts)
    // }
    return(
        <section className={s.loginSection}>
            <img src={img1} alt="" />
            <div className={s.loginSection__block}>
                <h2>Login To Exclusive</h2>
                <p>Enter your details below</p>
                <input  type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>
                    <Link to="/">Login</Link>
                    </button>
            </div>
        </section>
    )
}
export default Login