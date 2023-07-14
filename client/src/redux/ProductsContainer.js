import { connect } from "react-redux";
import { addToCartAC, addToWishlistAC } from "./reducers/productsReducer";
import Home from "../Components/HomePage/HomePage";
import Cart from "../Components/Cart/Cart";
import Wishlist from "../Components/Wishlist/Wishlist";
const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    products: state.products.products,
    cart: state.products.cartItems,
    wishlist: state.products.wishlistItems
})

const mapDispatchToProps = {
    addToCart: addToCartAC,
    addToWishlist: addToWishlistAC
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
