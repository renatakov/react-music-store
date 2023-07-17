import Product from "../Product/Product"
import s from "./Cart.module.css"
const Cart = (props) => {
    
        const arrWithPrices = []
    //   const getPrice = props.cart.map((product)=>(
    //     arrWithPrices.push(product.price)
    //   ))
      console.log(arrWithPrices)
      const initialValue = 0
      const sumWithInitial = arrWithPrices.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
      
      console.log(sumWithInitial);
    return(
        <>
        <h1>Basket</h1>
        <div className={s.cartContainer}>
        {/* {getCartItems} */}
        </div>
        <p>Total Sum: {sumWithInitial} $</p>
        </>
    )
}
export default Cart