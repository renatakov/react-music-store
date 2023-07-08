import Product from "../Product/Product"
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
        addToWishlist={props.addToWishlist}
        cart={props.cart}
        />
    ))
    return(
        <>
        <h1>Wishlist</h1>
        {getWishlistItems}
        </>
    )
}
export default Wishlist