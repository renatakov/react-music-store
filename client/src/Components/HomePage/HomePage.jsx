import React, { useState, useEffect, useContext, createContext } from "react";
import s from "./HomePage.module.css";
import Product from "../Product/Product";
import jbl from "../../images/HomePage/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
const MyContext = createContext();
const Home = (props) => {
  const data = React.useContext(MyContext);
  // console.log(props)

  // Используйте данные
  const [timer, setTimer] = useState({
    hours: 24,
    minutes: 59,
    seconds: 60,
  });

  const getProductsWithSale = data.products
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
    />
  ));
  const getBestSellingProducts = data.products.filter((product)=> product.id >= 5 && product.id <= 8)
  .map((product)=>(
    <Product
    key={product.id}
    title={product.title}
    img={product.img}
    stars={product.stars}
    sale={product.sale}
    price={product.price}
    reviews={product.reviews}
  />
  ))

  const getOtherProductsPart1 = data.products.filter((product)=> product.id > 8 && product.id <= 12)
  .map((product)=>(
    <Product
    key={product.id}
    title={product.title}
    img={product.img}
    stars={product.stars}
    sale={product.sale}
    price={product.price}
    reviews={product.reviews}
  />
  ))
  const getOtherProductsPart2 = data.products.filter((product)=>  product.id > 12)
  .map((product)=>(
    <Product
    key={product.id}
    title={product.title}
    img={product.img}
    stars={product.stars}
    sale={product.sale}
    price={product.price}
    reviews={product.reviews}
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
    </>
  );
};
export { MyContext }; 
export default Home;
