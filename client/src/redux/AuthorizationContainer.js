import { connect } from "react-redux";
import { addAccountAC, updateNewAccountAC } from "./reducers/autorizationReducer";
import SignUp from "../Components/SignUp/SignUp";

const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts
})

const mapStateToDispatch = {
    addAccount: addAccountAC, 
    updateNewAccount: updateNewAccountAC 
};


export default connect(mapStateToProps, mapStateToDispatch)(SignUp)