import { connect } from "react-redux";
import { addToCartAC } from "./reducers/productsReducer";
import Wishlist from "../Components/Wishlist/Wishlist";
const mapStateToProps = (state) => ({
    wishlist: state.products.wishlistItems
})

const mapDispatchToProps = {
    addToCart: addToCartAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
