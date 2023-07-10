import Product from "../Product/Product"
import s from "./Wishlist.module.css"
const Wishlist = (props) => {
    console.log(props.wishlist)
    const getWishlistItems = props.wishlist.map((product)=>(
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
        deleteFromWishlist={props.deleteFromWishlist}
        cart={props.cart}
        />
    ))
    return(
        <>
        <h1>Wishlist ({props.wishlist.length})</h1>
        <div className={s.wishlistContainer}>
        {getWishlistItems}
        </div>
        </>
    )
}
export default Wishlist