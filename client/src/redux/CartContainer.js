import { connect } from "react-redux";
// import { addToWishlistAC } from "./reducers/productsReducer";

import Cart from "../Components/Cart/Cart";

const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    products: state.products.products,
})

const mapDispatchToProps = {
    // addToWishlist: addToWishlistAC
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
