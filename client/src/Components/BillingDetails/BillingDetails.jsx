import s from "./BillingDetails.module.css"
import {useForm} from "react-hook-form"
const BillingDetails = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return(
        <section className={s.billinDetails__container}>
            <h2>Billing Details</h2>
        <form handleSubmit={onSubmit}>
            <input type="text" name="firstName"/>
            <input type="text" name="companyName"/>
            <input type="text" name="streetAdress"/>
            <input type="text" name="apartmentAndFloor"/>
            <input type="text" name="townCity"/>
            <input type="text" name="phoneNumber"/>
            <input type="email"name="emailAdress" />
        </form>
        </section>
    )
}

export default BillingDetails