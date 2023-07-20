import Product from "../Product/Product"
import s from "./Cart.module.css"
const Cart = (props) => {
  const basketItems = []
  const idUser = sessionStorage.getItem("userAuthKey")
  props.accounts.forEach((item) => {
    if (idUser !== null) {
      basketItems.push(...item.basket);
    }
  });
    console.log(basketItems)
    // props.products.forEach((item) => {
    //     productsId.push(item.id);
    // });
    // const arrWithPrices = []
    const renderProducts = () => {
      return basketItems.map((basketItem) => {
        const product = props.products.find((product) => product.id === basketItem);
    
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
          
          />;
        }
        
        
      });
    };
    // console.log(productsId)

      // console.log(arrWithPrices)
      // const initialValue = 0
      // const sumWithInitial = arrWithPrices.reduce(
      //   (accumulator, currentValue) => accumulator + currentValue,
      //   initialValue
      // );
      
      // console.log(sumWithInitial);
    return(
        <>
        <h1>Basket</h1>
        <div className={s.cartContainer}>
        {renderProducts()}
        </div>
        {/* <p>Total Sum: {sumWithInitial} $</p> */}
        </>
    )
}
export default Cart

// 