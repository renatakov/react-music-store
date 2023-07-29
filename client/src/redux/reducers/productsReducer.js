import product1 from "../../images/products/g92-2-500x500 1.png";
import product2 from "../../images/products/ak-900-01-500x500 1.png";
import product3 from "../../images/products/g27cq4-500x500 1.png";
import product4 from "../../images/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png";
import product5 from "../../images/products/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png";
import product6 from "../../images/products/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png";
import product7 from "../../images/products/gammaxx-l240-argb-1-500x500 1.png";
import product8 from "../../images/products/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png";
import product9 from "../../images/products/71RdoeXxtrL 1.png";
import product10 from "../../images/products/eos-250d-03-500x500 1.png";
import product11 from "../../images/products/ideapad-gaming-3i-01-500x500 1.png";
import product12 from "../../images/products/curology-j7pKVQrTUsM-unsplash 1.png";
import product13 from "../../images/products/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png";
import product14 from "../../images/products/Copa_Sense 1.png";
import product15 from "../../images/products/GP11_PRD3 1.png";
import product16 from "../../images/products/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png";
import { searchFn } from "../../Assets/search";


const SEARCH_PRODUCTS = "SEARCH_PRODUCTS"

const initialState = {
    products: [

    {
        id: 1,
        title: 'HAVIT HV-G92 Gamepad',
        stars: 5,
        sale: true,
        saleNum: 40,
        reviews: 88,
        img: product1,
        price: 120
    },
    {
        id: 2,
        title: 'AK-900 Wired Keyboard',
        stars: 4,
        sale: true,
        saleNum: 35,
        reviews: 75,
        img: product2,
        price: 960
    },
    {
        id: 3,
        title: 'IPS LCD Gaming Monitor',
        stars: 5,
        sale: true,
        saleNum: 30,
        reviews: 99,
        img: product3,
        price: 370
    },
    {
        id: 4,
        title: 'S-Series Comfort Chair ',
        stars: 4,
        sale: true,
        saleNum: 25,
        reviews: 99,
        img: product4,
        price: 375
  },
  {
      id: 5,
      title: 'The north coat ',
      stars: 5,
      sale: false,
      reviews: 65,
      img: product5,
      price: 260
  },
  {
      id: 6,
      title: 'Gucci duffle bag',
      stars: 4,
      sale: false,
      reviews: 65,
      img: product6,
      price: 960
  },
  {
      id: 7,
      title: 'RGB liquid CPU Cooler',
      stars: 4,
      sale: false,
      reviews: 65,
      img: product7,
      price: 160
  },
  {
      id: 8,
      title: 'Small BookSelf',
      stars: 5,
      sale: false,
      reviews: 65,
      img: product8,
      price: 360
  },
  {
      id: 9,
      title: 'Breed Dry Dog Food',
      stars: 3,
      sale: false,
      reviews: 35,
      img: product9,
      price: 100
  },
  {
      id: 10,
      title: 'CANON EOS DSLR Camera',
      stars: 4,
      sale: false,
      reviews: 65,
      img: product10,
      price: 360
  },
  {
      id: 11,
      title: 'ASUS FHD Gaming Laptop',
      stars: 5,
      sale: false,
      reviews: 325,
      img: product11,
      price: 700
  },
  {
      id: 12,
      title: 'Curology Product Set ',
      stars: 4,
      sale: false,
      reviews: 145,
      img: product12,
      price: 500
  },
  {
      id: 13,
      title: 'Kids Electric Car',
      stars: 5,
      sale: false,
      reviews: 65,
      img: product13,
      price: 960
  },
  {
      id: 14,
      title: 'Jr. Zoom Soccer Cleats',
      stars: 5,
      sale: false,
      reviews: 35,
      img: product14,
      price: 1160
  },
  {
      id: 15,
      title: 'GP11 Shooter USB Gamepad',
      stars: 4,
      sale: false,
      reviews: 55,
      img: product15,
      price: 660
  },
  {
      id: 16,
      title: 'Quilted Satin Jacket',
      stars: 4,
      sale: false,
      reviews: 55,
      img: product16,
      price: 660
  },
],
search:[],
searchText:"",
searchStatus: false
}


const searchProducts = (state, action) => {
return{
    ...state,
    searchStatus: state.searchText !== 0,
    searchText: action.inputData,
    search: state.products.filter((item)=>{
        if(searchFn(state.searchText, item.title)){
            return item.id
        } else{
            return null
        }
    })
}
}



export const productsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEARCH_PRODUCTS:{
          return  searchProducts(state, action)
        }
        default:{
            return state;
        }
    }
}

export const searchProductsAC = (inputData)=>({
    type: SEARCH_PRODUCTS,
    inputData
})

