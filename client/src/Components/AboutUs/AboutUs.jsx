import s from "./AboutUs.module.css"
import img1 from "../../images/AboutUs/Side Image.png"
import icon1 from "../../images/logos/icon-shop.svg"
import icon3 from "../../images/logos/Icon-Shopping bag.svg"
import icon4 from "../../images/logos/Icon-Moneybag.svg"

const AboutUs = () =>{
return(
    <main>
        <section className={s.aboutUsFirstSection}>
            <div className={s.aboutUsFirstSection__container}>
                <h2>Our Story</h2>
                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <img src={img1} alt="" />
        </section>
        <section className={s.aboutUsSecondSection}>
            <div className={s.aboutUsSecondSection__container}>
                <div className={s.aboutUsSecondSection__container_item}>
                    <img src={icon1} alt="" />
                    <span>10.5k</span>
                    <p>Sallers active our site</p>
                </div>
                <div className={s.aboutUsSecondSection__container_item}>
                    <img src={icon3} alt="" />
                <span>45.5k</span>
                    <p>Customer active in our site</p>
                </div>
                <div className={s.aboutUsSecondSection__container_item}>
                    <img src={icon4} alt="" />
                <span>25k</span>
                    <p>Anual gross sale in our site</p>
                </div>
            </div>
        </section>
    </main>
)
}

export default AboutUs