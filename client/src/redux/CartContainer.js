import { connect } from "react-redux";
import { deleteFromBasketAC } from "./reducers/usersReducer";

import Cart from "../Components/Cart/Cart";

const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    products: state.products.products,
})

const mapDispatchToProps = {
    deleteFromBasket: deleteFromBasketAC
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
