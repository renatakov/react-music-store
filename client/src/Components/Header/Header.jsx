import s from "./Header.module.css"
import { Link } from "react-router-dom";
const Header = (props) =>{
    console.log(props)
    const handleLogoutBtn = () => {
        if(sessionStorage.getItem("userAuthKey")){
            sessionStorage.clear()
        }
    }
    const handleSearch = (newValue) => {
        props.searchProducts(newValue)
        console.log(newValue)
        console.log(props.searchText)
    }
    return(
        <header>
            <span>Exclusive</span>
                <ul>
                    <Link className={s.linkTo} to="/">Home</Link>
                    <Link className={s.linkTo} to="/contact">Contact</Link>
                        <Link className={s.linkTo} to="/aboutus">About</Link>
                    <Link className={s.linkTo} to="/signup">SignUp</Link>
                </ul>
                <div className={s.btnSection}>
            <input 
            value={props.searchText}
            onChange={(e)=>{handleSearch(e.target.value)}} 
            id={s.inputSearch} type="text" placeholder="Search"/>
            <Link to="/wishlist">
            <button className={s.wishlistBtn}></button>
            </Link>
            <Link to="/cart">
            <button className={s.cartBtn}></button>
            </Link>
            {sessionStorage.getItem("userAuthKey") ? <button onClick={handleLogoutBtn} className={s.logoutBtn}></button> : null}
                </div>
        </header>
    )
}
export default Header;