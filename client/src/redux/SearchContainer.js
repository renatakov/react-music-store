import { connect } from "react-redux";
import Header from "../Components/Header/Header"
import {searchProductsAC} from "../redux/reducers/productsReducer"

const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    products: state.products.products,
    searchText: state.products.searchText,
    
})

const mapDispatchToProps = {
    searchProducts: searchProductsAC

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
