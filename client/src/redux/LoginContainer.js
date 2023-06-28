import { connect } from "react-redux";
import { loginToAccountAC } from "./reducers/autorizationReducer";
import Login from "../Components/Login/Login";

const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts
})

const mapDispatchToProps = {
    loginToAccount: loginToAccountAC
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
