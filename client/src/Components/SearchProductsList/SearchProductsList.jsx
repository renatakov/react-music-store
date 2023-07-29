import Product from "../Product/Product"

const SearchProductsList = (props) => {
    const currentList = props.searchStatus ? props.searchArr : props.products
    const Collection = currentList.map((item)=>{
        return(<Product     id={item.id}
            key={item.id}
            title={item.title}
            img={item.img}
            stars={item.stars}
            price={item.price}
            sale={item.sale}
            saleNum={item.saleNum}
            reviews={item.reviews}
/>)
    })
    return(
        <div>
        {Collection}
        </div>
    )
}

export default SearchProductsList