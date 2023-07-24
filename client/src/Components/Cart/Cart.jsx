import Product from "../Product/Product"
import s from "./Cart.module.css"
import  {Link} from "react-router-dom"
import { useState } from "react"
const Cart = (props) => {
  // const [arrWithPrices, setArr] = useState([])
  const basketItems = []
  const idUser = sessionStorage.getItem("userAuthKey")
  props.accounts.forEach((item) => {
    if (idUser !== null) {
      basketItems.push(...item.basket);
    }
  });
    // console.log(basketItems)
    // props.products.forEach((item) => {
    //     productsId.push(item.id);
    // });
    // const arrWithPrices = []
    let sum = 0
    
    const renderProducts = () => {

      return basketItems.map((basketItem) => {
        const product = props.products.find((product) => product.id === basketItem);
        
        if (product) {
          sum+=product.price
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
          deleteFromBasket={props.deleteFromBasket}
          
          />;
        }
        
        
      });
    };
    // console.log(productsId)

      // console.log(arrWithPrices)
      // arrWithPrices.forEach((item)=>{
      //   sum+=item
      //   console.log(item);
      // })
      
    return(
        <>
        <h1>Basket</h1>
        <div className={s.cartContainer}>
        {renderProducts()}
        </div>
        <p>Total Sum: {sum} $</p>
        <button className={s.checkoutBtn}>
          <Link to="/billing-details">
          Procees to checkout
          </Link>
          </button>
        </>
    )
}
export default Cart

// 