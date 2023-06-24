import s from "./SignUp.module.css"
import img1 from "../../images/authorizaion/dl.beatsnoop 1.png"
const SignUp = (props) => {
    console.log(props.accounts)
    return(
        <section className={s.signUpSection}>
            <img src={img1} alt="" />
            <div className={s.signUpSection__block}>
                <h2>Create an account</h2>
                <p>Enter your details below</p>
                
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Create an account</button>
                <p>
                    Already have an account? Login
                </p>
            </div>
        </section>
    )
}
export default SignUp