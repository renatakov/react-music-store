import s from "./Contact.module.css"
import iconPhone from "../../images/logos/icon-phone.svg"
import iconMail from "../../images/logos/icon-mail.svg"

const Contact = () =>{
    return(
        <section className={s.contactSection}>
            <div className={s.contactSection__firstBlock}>
                <div className={s.firstBlock_container}>
            
            <span> <img src={iconPhone} alt=""/> Call To Us</span>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
                
                </div>
                <div className={s.firstBlock_container}>
            
            <span> <img src={iconMail} alt=""/> Write To Us</span>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
                
                </div>
            </div>
            <form>
            <div className={s.form_inputs}>
                <input type="text"  placeholder="Your Name" />
                <input type="email" placeholder="Your Email"/>
                <input type="tel" placeholder="Your Phone"/>
            </div>
            <textarea name="" id="" cols="40" rows="20">Your Message</textarea>
            </form>
        </section>
    )
}

export default Contact