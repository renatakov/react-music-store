import Product from "../Product/Product"

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
        {getCartItems}
        </>
    )
}
export default Cart