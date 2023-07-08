import Product from "../Product/Product"
import s from "./Cart.module.css"
const Cart = (props) => {
    const getCartItems = props.cart.map((product)=>(
        <Product
        id={product.id}
        key={product.id}
        title={product.title}
        img={product.img}
        stars={product.stars}
        sale={product.sale}
        price={product.price}
        reviews={product.reviews}
        addToCart={props.addToCart}
        addToWishlist={props.addToWishlist}
        cart={props.cart}
        />
    ))
    return(
        <>
        <h1>Cart</h1>
        <div className={s.cartContainer}>
        {getCartItems}
        </div>
        </>
    )
}
export default Cart