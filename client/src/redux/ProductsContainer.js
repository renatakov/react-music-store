import { connect } from "react-redux";
import Home from "../Components/HomePage/HomePage";
import { addToBasketAC, addToWishlistAC} from "./reducers/usersReducer";
const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    products: state.products.products,
})

const mapDispatchToProps = {
    addToBasket: addToBasketAC,
    addToWishlist: addToWishlistAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
