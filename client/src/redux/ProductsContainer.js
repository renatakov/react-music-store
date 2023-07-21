import { connect } from "react-redux";
import Home from "../Components/HomePage/HomePage";
import { addToBasketAC, addToWishlistAC, deleteFromBasketAC} from "./reducers/usersReducer";
const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    products: state.products.products,
})

const mapDispatchToProps = {
    addToBasket: addToBasketAC,
    addToWishlist: addToWishlistAC,
    deleteFromBasket: deleteFromBasketAC

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
