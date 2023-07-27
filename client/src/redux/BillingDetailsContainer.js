import { connect } from "react-redux";
import BillingDetails from "../Components/BillingDetails/BillingDetails";

const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts,
    products: state.products.products,
})

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingDetails);
