import s from "./Contact.module.css"
import iconPhone from "../../images/logos/icon-phone.svg"
import iconMail from "../../images/logos/icon-mail.svg"
import {useForm} from "react-hook-form"

const Contact = () =>{
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return(
        <section className={s.contactSection}>
            <div className={s.contactSection__firstBlock}>
                <div className={s.firstBlock_container}>
                <img src={iconPhone} alt=""/>
            <span>  Call To Us</span>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
                
                </div>
                <hr />
                <div className={s.firstBlock_container}>
                <img src={iconMail} alt="iconMail"/>
            <span> Write To Us</span>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
                
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.contactSection__form}>
            <div className={s.form_inputs}>
            <input {...register('username', {required: true})} type="text" placeholder="Your Name" />
<input {...register('useremail', {required: true, pattern: /[a-z]\d+@[a-z]+\.[a-z]{2,4}/})} type="email" placeholder="Your Email" />
<input {...register('userphone', {required: true, pattern: /\+[1-9]{1,3}\d{10}/})} type="tel" placeholder="Your Phone" />
   </div>
            <textarea {...register('usermessage', {required: false})} name="" id="" cols="50" rows="10">Your Message</textarea>
            <button type="submit">Send Message</button>
            </form>
        </section>
    )
}

export default Contact