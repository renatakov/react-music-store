import { connect } from "react-redux";
import { addAccountAC, updateNewAccountAC, loginToAccountAC } from "./reducers/usersReducer";
import SignUp from "../Components/SignUp/SignUp";


const mapStateToProps = (state) => ({
    accounts: state.authorization.accounts
})

const mapStateToDispatch = {
    addAccount: addAccountAC, 
    updateNewAccount: updateNewAccountAC,
    loginToAccount:loginToAccountAC
};


export default connect(mapStateToProps, mapStateToDispatch)(SignUp)