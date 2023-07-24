import s from "./BillingDetails.module.css"
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {useForm} from "react-hook-form"
const BillingDetails = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return(
        <section className={s.billinDetails__container}>
            <h2>Billing Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input 
            type="text" 
            name="firstName"
            {...register("firstName", {required: true})}
            />
            {errors.firstName && Notify.warning("This field is required")}
            <label htmlFor="companyName"> Company Name</label>
            <input 
            type="text" 
            name="companyName"
            {...register("companyName", {required: false})}
            />
            <label htmlFor="streetAddress">Street Address</label>
            <input 
            {...register("streetAddress", {required: true})}
            type="text" 
            name="streetAddress"/>
            {errors.streetAddress && Notify.warning("This field is required")}

            <label htmlFor="apartmentAndFloor">Apartment, floor, etc. (optional)</label>
            <input 
            type="text" 
            name="apartmentAndFloor"
            {...register("apartmentAndFloor", {required: false})}
            />
            <label htmlFor="townCity">Town/City</label>
            <input 
            type="text" 
            name="townCity"
            {...register("townCity", {required: true})}
            />
            {errors.townCity && Notify.warning("This field is required")}

            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
            type="text" 
            name="phoneNumber"
            {...register("phoneNumber", {required: true})}
            />
            {errors.phoneNumber && Notify.warning("This field is required")}

            <label htmlFor="emailAddress">Email Address</label>
            <input 
            type="email"
            name="emailAddress"
            {...register("emailAddress", {required: true})}
            />
            {errors.emailAddress && Notify.warning("This field is required")}

            <button type="submit">Place Order</button>
        </form>
        </section>
    )
}

export default BillingDetails