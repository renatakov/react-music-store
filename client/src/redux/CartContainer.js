import { connect } from "react-redux";
// import { addToWishlistAC } from "./reducers/productsReducer";

import Cart from "../Components/Cart/Cart";

const mapStateToProps = (state) => ({
    // cart: state.products.cartItems,
})

const mapDispatchToProps = {
    // addToWishlist: addToWishlistAC
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
