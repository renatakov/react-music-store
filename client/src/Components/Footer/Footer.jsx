import s from "./Footer.module.css"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className={s.supportBlock}>
                <h3>Support</h3>
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className={s.accountBlock}>
                <h3>Account</h3>
                <ul>
                    <li><Link to="/login">Login</Link>/<Link to="/signup">Register</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                    <li><Link to="/">Shop</Link></li>
                </ul>
            </div>
            <div className={s.linksBlock}>
                <h3>Quick Link</h3>
                <ul>
                    <li><a href="#2">Privacy Policy</a></li>
                    <li><a href="#2">Terms Of Use</a></li>
                    <li><a href="#2">FAQ</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;