import { connect } from "react-redux";
import { addToCartAC } from "./reducers/productsReducer";
import Home from "../Components/HomePage/HomePage";

const mapStateToProps = (state) => ({
    products: state.products.products,
    cart: state.products.cartItems
})

const mapDispatchToProps = {
    addToCart: addToCartAC
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
