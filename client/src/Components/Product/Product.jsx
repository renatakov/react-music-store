import s from './Product.module.css'
import wishlistImg from "../../images/logos/Wishlist.svg"
import deleteFromWishlistImg from "../../images/logos/Vector.svg"
const Product = (props) =>{
    const addBucketItems = props.accounts && props.accounts.map(account => (account.bucket = {...props.cart}));
  const addWishlistItems = props.accounts && props.accounts.map(account => (account.wishlist = {...props.wishlist}));
    // console.log(props.accounts) // array with accounts
    const loginFilter = props.accounts && props.accounts.filter((account) => account.email === localStorage.getItem("userEmail") && account.password === localStorage.getItem("userPassword"))

    let prices = props.sale === true ? <p className={s.sale}>{props.price}$</p> : <p className={s.price}>{props.price}$</p>
    const reviewImg = []
    for(let i = 0; i < props.stars; i++){
        reviewImg.push(
            <img width="20px" height="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQZwqgL2tnG5LOLljy-Mv73yHr5neg5qj8Q&usqp=CAU" alt=""/>
        )
    }
    
    const wishlistBtn = () => {
        if(loginFilter.length === 1){
            localStorage.setItem("userWishlist", JSON.stringify(addWishlistItems))
            props.addToWishlist(props.id)
        } else{
            alert("You need to login")
        }
        console.log(props.wishlist)
    }
    const cartBtn = () => {
        if(loginFilter.length === 1){
        localStorage.setItem("bucket", JSON.stringify(addBucketItems))

            props.addToCart(props.id)
        }
        console.log(props.cart)
    }

    const deleteFromWishlistFunction = () => {
        props.deleteFromWishlist(props.id)
    }
    return(
        
        <div className={s.productContainer}>
            {props.saleNum > 0 && <span>-{props.saleNum}%</span>}
            <div className={s.productContainer__firstBlock}>
            <img className={s.productImg} src={props.img} alt=""/>
            {props.addToWishlist && <button onClick={wishlistBtn} className={s.wishlistBtn}>
                <img src={wishlistImg} alt="" />
            </button>}
            
            </div>
            <h3>{props.title}</h3>
            {prices}
            {reviewImg}
            <span>({props.reviews})</span>
            {props.deleteFromWishlist && <button onClick={deleteFromWishlistFunction} className={s.deleteFromWishlistBtn}>
                <img src={deleteFromWishlistImg} alt=""/>
            </button> }
            
            {props.addToCart && <button  onClick={cartBtn} className={s.addToCartBtn}>Add To Cart</button>}
            
        </div>
        
    )
}

export default Product