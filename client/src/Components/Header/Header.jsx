import s from "./Header.module.css"

const Header = () =>{
    return(
        <header>
            <span>Exclusive</span>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>SignUp</li>
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