import React, { useState, useEffect, useContext, createContext } from "react";
import s from "./HomePage.module.css";
import Product from "../Product/Product";
import jbl from "../../images/HomePage/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
import ps5 from "../../images/HomePage/ps5-slim-goedkope-playstation_large 1.png"
import hatImg from "../../images/HomePage/attractive-woman-wearing-hat-posing-black-background 1.png"
import speakersImg from "../../images/HomePage/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
import perfumeImg from "../../images/HomePage/652e82cd70aa6522dd785109a455904c.png"
import icon1 from "../../images/logos/icon-delivery.svg";
import icon2 from "../../images/logos/Icon-Customer service.svg"
import icon3 from "../../images/logos/Icon-secure.svg"


const Home = (props) => {

  // console.log(props)

  // Используйте данные
  const [timer, setTimer] = useState({
    hours: 24,
    minutes: 59,
    seconds: 60,
  });

  const getProductsWithSale = props.products
  .filter((product) => product.sale === true)
  .map((product) => (
    <Product
      key={product.id}
      title={product.title}
      img={product.img}
      stars={product.stars}
      price={product.price}
      sale={product.sale}
      saleNum={product.saleNum}
      reviews={product.reviews}
      addToCart={props.addToCart}
    />
  ));
  const getBestSellingProducts = props.products.filter((product)=> product.id >= 5 && product.id <= 8)
  .map((product)=>(
    <Product
    key={product.id}
    title={product.title}
    img={product.img}
    stars={product.stars}
    sale={product.sale}
    price={product.price}
    reviews={product.reviews}
    addToCart={props.addToCart}

  />
  ))

  const getOtherProductsPart1 = props.products.filter((product)=> product.id > 8 && product.id <= 12)
  .map((product)=>(
    <Product
    key={product.id}
    title={product.title}
    img={product.img}
    stars={product.stars}
    sale={product.sale}
    price={product.price}
    reviews={product.reviews}
    addToCart={props.addToCart}

  />
  ))
  const getOtherProductsPart2 = props.products.filter((product)=>  product.id > 12)
  .map((product)=>(
    <Product
    key={product.id}
    title={product.title}
    img={product.img}
    stars={product.stars}
    sale={product.sale}
    price={product.price}
    reviews={product.reviews}
    addToCart={props.addToCart}
    cart={props.cartItems}
  />
  ))
// console.log(getProductsWithSale)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const { hours, minutes, seconds } = prevTimer;

        if (seconds > 0) {
          return { ...prevTimer, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTimer, seconds: 59, minutes: minutes - 1 };
        } else if (hours > 0) {
          return { ...prevTimer, seconds: 59, minutes: 59, hours: hours - 1 };
        }

        return prevTimer;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <section className={s.firstSection}>
        <aside>
          <nav>
            <ul>
              <li>Men's fashion</li>
              <li>Woman's fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby's & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </nav>
        </aside>
        <div className={s.firstSection__lastBlock}>
          <span>iPhone 14 Series</span>
          <h2>Up to 10% off Voucher</h2>
        </div>
      </section>
      <section className={s.secondSection}>
        <h4>Today's</h4>
        <h3>Flash Sales</h3>
        <div className={s.secondSection__timer}>
          <span>{timer.hours}h </span>
          <span>:</span>
          <span> {timer.minutes}min</span>
          <span>:</span>
          <span>{timer.seconds}s</span>
        </div>
        <div className={s.productsContainer}>
        {getProductsWithSale}
        </div>
      </section>
      <section className={s.thirdSection}>
        <h4>This Month</h4>
        <h3>Best Selling Products</h3>
        <div className={s.bestSellingProductsContainer}>
          {getBestSellingProducts}
        </div>
      </section>
      <section className={s.fourthSection}>
        <div className={s.fourthSection__firstBlock}>
        <h4>Categories</h4>
        <h2>Enhance Your Music Experience</h2>
        <button>Buy Now!</button>
        </div>
        <img src={jbl} alt=""/>
      </section>
      <section className={s.fifthSection}>
      <h4>Our Products</h4>
        <h3>Explore Our Products</h3>
        <div className={s.otherProductsContainer}>
          <div className={s.otherProductsContainer__firstBlock}>
          {getOtherProductsPart1}
          </div>
          <div className={s.otherProductsContainer__secondBlock}>
          {getOtherProductsPart2}
          </div>
        </div>
      </section>
      <section className={s.sixthSection}>
      <h4>Featured</h4>
        <h3>New Arrival</h3>
        <div className={s.sixthSection__container}>
          <div className={s.container__firstBlock}>
            <img src={ps5} alt=""/>
            <h5>PlayStation 5</h5>
            <p>Black and White version of the PS5 coming out on sale.</p>
          </div>
          <div className={s.container__secondBlock}>
            <div className={s.secondBlock__item1}>
            <img src={hatImg} alt=""/>
              <h5>Women’s Collections</h5>
              <p>Featured woman collections that give you another vibe.</p>
            </div>
            <div className={s.secondBlock__item2}>
              <div className={s.item2__firstBlock}>
            <img src={speakersImg} alt=""/>
            <h5>Speakers</h5>
              <p>Amazon wireless speakers</p>
            </div>
            <div className={s.item2__secondBlock}>
            <img src={perfumeImg} alt=""/>
            <h5>Perfume</h5>
              <p>GUCCI INTENSE OUD EDP</p>
            </div>
              </div>
          </div>
        </div>
      </section>
      <section className={s.seventhSection}>
      <div className={s.seventhSection__box}>
        <img src={icon1} alt="" />

        <h4>FREE AND FAST DELIVERY</h4>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className={s.seventhSection__box}>
      <img src={icon2} alt="" />
        <h4>FREE AND FAST DELIVERY</h4>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className={s.seventhSection__box}>
        
      <img src={icon3} alt="" />
        <h4>FREE AND FAST DELIVERY</h4>
        <p>Free delivery for all orders over $140</p>
      </div>
      </section>
    </>
  );
};

export default Home;
