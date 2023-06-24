import s from "./Header.module.css"
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <header>
            <span>Exclusive</span>
                <ul>
                    <Link className={s.linkTo} to="/">Home</Link>
                    <li>
                        Contact
                        </li>
                        <Link className={s.linkTo} to="/aboutus">About</Link>
                    <Link className={s.linkTo} to="/signup">SignUp</Link>
                </ul>
                <div className={s.btnSection}>
            <input id={s.inputSearch} type="text" placeholder="Search"/>
            <button className={s.wishlistBtn}>
                
            </button>
            <button className={s.cartBtn}>
                
            </button>
                </div>
        </header>
    )
}
export default Header;