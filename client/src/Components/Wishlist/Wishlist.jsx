import Product from "../Product/Product"
import s from "./Wishlist.module.css"
const Wishlist = (props) => {
    const wishlistItems = []
    const idUser = sessionStorage.getItem("userAuthKey")
    props.accounts.forEach((item) => {
      if (idUser !== null) {
        wishlistItems.push(...item.wishlist);
      }
    });
      console.log(wishlistItems)
      // props.products.forEach((item) => {
      //     productsId.push(item.id);
      // });
      // const arrWithPrices = []
      const renderProducts = () => {
        return wishlistItems.map((wishlistItem) => {
          const product = props.products.find((product) => product.id === wishlistItem);
      
          if (product) {
  
            return <Product
            id={product.id}
            wishlist={props.wishlist}
            key={product.id}
            title={product.title}
            img={product.img}
            stars={product.stars}
            sale={product.sale}
            price={product.price}
            reviews={product.reviews}
            addToBasket={props.addToBasket}
            accounts={props.accounts}
            addTowishlist={props.addTowishlist}
            />;
          }
          
          
        });
      };
    return(
        <>
        <h1>Wishlist </h1>
        <div className={s.wishlistContainer}>
        {renderProducts()}
        </div>
        </>
    )
}
export default Wishlist