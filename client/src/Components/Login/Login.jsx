import s from "./Login.module.css"
import img1 from "../../images/authorizaion/dl.beatsnoop 1.png"
const Login = (props) => {
    console.log(props)
    return(
        <section className={s.loginSection}>
            <img src={img1} alt="" />
            <div className={s.loginSection__block}>
                <h2>Login To Exclusive</h2>
                <p>Enter your details below</p>
                <input onChange={(e)=>{
        props.loginToAccount("inputEmail", e.target.value)

                }}  type="email" placeholder="Email"/>
                <input onChange={(e)=>{
        props.loginToAccount("inputPassword", e.target.value)

                }}  type="password" placeholder="Password"/>
                {/* <button onClick={
                    ()=>
                        props.addAccount()
                    
                    } >Login</button> */}
            </div>
        </section>
    )
}
export default Login