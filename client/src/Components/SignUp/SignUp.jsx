import s from "./SignUp.module.css"
import img1 from "../../images/authorizaion/dl.beatsnoop 1.png"
import { Link } from "react-router-dom"
const SignUp = (props) => {
    console.log(props)



    return(
        <section className={s.signUpSection}>
            <img src={img1} alt="" />
            <div className={s.signUpSection__block}>
                <h2>Create an account</h2>
                <p>Enter your details below</p>
                
                <input onChange={(e)=>{
        props.updateNewAccount("inputName", e.target.value)

                }}  type="text" placeholder="Name"/>
                <input onChange={(e)=>{
        props.updateNewAccount("inputEmail", e.target.value)

                }}  type="email" placeholder="Email"/>
                <input onChange={(e)=>{
        props.updateNewAccount("inputPassword", e.target.value)

                }}  type="password" placeholder="Password"/>
                <button onClick={
                    ()=>
                        props.addAccount()
                    
                    } >Create an account</button>
                <p>
                    Already have an account? <Link className={s.linkToLogin} to="/login">Login</Link>
                </p>
            </div>
        </section>
    )
}
export default SignUp