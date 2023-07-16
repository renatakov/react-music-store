import Product from "../Product/Product"
import s from "./Cart.module.css"
const Cart = (props) => {
    // const getCartItems = props.cart.map((product)=>(
    //     <Product
    //     id={product.id}
    //     key={product.id}
    //     title={product.title}
    //     img={product.img}
    //     stars={product.stars}
    //     sale={product.sale}
    //     price={product.price}
    //     reviews={product.reviews}
    //     // cart={props.cart}
    //     />
    // ))
    //     const arrWithPrices = []
    //   const getPrice = props.cart.map((product)=>(
    //     arrWithPrices.push(product.price)
    //   ))
    //   console.log(arrWithPrices)
    //   const initialValue = 0
    //   const sumWithInitial = arrWithPrices.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue,
    //     initialValue
    //   );
      
    //   console.log(sumWithInitial);
    return(
        <>
        <h1>Cart</h1>
        <div className={s.cartContainer}>
        {/* {getCartItems} */}
        </div>
        {/* <p>Total Sum: {sumWithInitial} $</p> */}
        </>
    )
}
export default Cart