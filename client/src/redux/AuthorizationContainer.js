import { connect } from "react-redux";
import { addAccountAC, updateNewAccountAC, loginToAccountAC } from "./reducers/autorizationReducer";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";

const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts
})

const mapStateToDispatch = {
    addAccount: addAccountAC, 
    updateNewAccount: updateNewAccountAC,
    loginToAccount:loginToAccountAC
};


export default connect(mapStateToProps, mapStateToDispatch)(SignUp)