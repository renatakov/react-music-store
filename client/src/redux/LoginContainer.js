import { connect } from "react-redux";
import { loginToAccountAC } from "./reducers/autorizationReducer";
import Login from "../Components/Login/Login";

const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    wishlist: state.products.wishlistItems,
    cart: state.products.cartItems
})

const mapDispatchToProps = {
    loginToAccount: loginToAccountAC
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
