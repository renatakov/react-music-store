import { connect } from "react-redux";
import Home from "../Components/HomePage/HomePage";
import {searchProductsAC} from "../redux/reducers/productsReducer"
import { addToBasketAC, addToWishlistAC, deleteFromBasketAC} from "./reducers/usersReducer";
const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    products: state.products.products,
    searchText: state.products.searchText,
    searchStatus: state.products.searchStatus
})

const mapDispatchToProps = {
    addToBasket: addToBasketAC,
    addToWishlist: addToWishlistAC,
    deleteFromBasket: deleteFromBasketAC,
    searchProducts: searchProductsAC

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
