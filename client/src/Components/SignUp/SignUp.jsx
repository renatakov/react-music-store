import s from "./SignUp.module.css"
import img1 from "../../images/authorizaion/dl.beatsnoop 1.png"
import React, { useRef } from "react"
const SignUp = (props) => {
    console.log(props)
    const formRefs = {
        name: useRef(null),
        email:useRef(null),
        password: useRef(null),
        button: useRef(null)
    }


    return(
        <section className={s.signUpSection}>
            <img src={img1} alt="" />
            <div className={s.signUpSection__block}>
                <h2>Create an account</h2>
                <p>Enter your details below</p>
                
                <input onChange={()=>{
        props.updateNewAccount("inputName", formRefs.name.current.value)

                }} ref={formRefs.name} type="text" placeholder="Name"/>
                <input onChange={()=>{
        props.updateNewAccount("inputEmail", formRefs.email.current.value)

                }} ref={formRefs.email} type="email" placeholder="Email"/>
                <input onChange={()=>{
        props.updateNewAccount("inputPassword", formRefs.password.current.value)

                }} ref={formRefs.password} type="password" placeholder="Password"/>
                <button onClick={
                    ()=>{
                        props.addAccount()
                    // console.log(props.accounts)
                    }
                    } ref={formRefs.button}>Create an account</button>
                <p>
                    Already have an account? Login
                </p>
            </div>
        </section>
    )
}
export default SignUp