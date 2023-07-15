import { connect } from "react-redux";
import Home from "../Components/HomePage/HomePage";
const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    products: state.products.products,
})

const mapDispatchToProps = {
    // addToCart: addToCartAC,
    // addToWishlist: addToWishlistAC
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
