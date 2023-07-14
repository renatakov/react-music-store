import { connect } from "react-redux";
import { addToCartAC, deleteFromWishlistAC } from "./reducers/productsReducer";
import Wishlist from "../Components/Wishlist/Wishlist";
const mapStateToProps = (state) => ({
    
    wishlist: state.products.wishlistItems
})

const mapDispatchToProps = {
    addToCart: addToCartAC,
    deleteFromWishlist: deleteFromWishlistAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
