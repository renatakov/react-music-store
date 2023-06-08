import s from './Product.module.css'
const Product = (props) =>{

    const reviewImg = []
    for(let i = 0; i < props.stars; i++){
        reviewImg.push(
            <img width="20px" height="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQZwqgL2tnG5LOLljy-Mv73yHr5neg5qj8Q&usqp=CAU" alt=""/>
        )
    }
    return(
        <div className={s.productContainer}>
            {props.saleNum > 0 && <span>-{props.saleNum}%</span>}
            <img src={`../../images/products/${props.img}`} alt=""/>
            <h3>{props.title}</h3>
            <p>{props.price}$</p>
            {reviewImg}
            <span>({props.reviews})</span>
        </div>
    )
}

export default Product