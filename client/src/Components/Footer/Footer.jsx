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
                    <li><a href="#">My Account</a></li>
                    <li><Link to="/login">Login</Link>/<a href="#">Register</a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>
            <div className={s.linksBlock}>
                <h3>Quick Link</h3>
                <ul>
                    <li><a href="#2">Privacy Policy</a></li>
                    <li><a href="#2">Terms Of Use</a></li>
                    <li><a href="#2">FAQ</a></li>
                    <li><a href="#2">Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;