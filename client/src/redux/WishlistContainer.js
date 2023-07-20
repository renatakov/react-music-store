import { connect } from "react-redux";
import { addToBasketAC } from "./reducers/usersReducer";

import Wishlist from "../Components/Wishlist/Wishlist";
const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    products: state.products.products,
})

const mapDispatchToProps = {
    addToBasket: addToBasketAC,
    // deleteFromWishlist: deleteFromWishlistAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
