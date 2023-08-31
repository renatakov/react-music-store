import HomePage from "../Components/HomePage/HomePage"
import {render, screen} from "@testing-library/react"
import {BrowserRouter} from "react-router-dom"
describe("HomePage Component Tests", () => {
    const products = [

        {
            id: 1,
            title: 'HAVIT HV-G92 Gamepad',
            stars: 5,
            sale: true,
            saleNum: 40,
            reviews: 88,
            img: "product1",
            price: 120
        },
        {
            id: 2,
            title: 'AK-900 Wired Keyboard',
            stars: 4,
            sale: true,
            saleNum: 35,
            reviews: 75,
            img: "product2",
            price: 960
        },
        {
            id: 3,
            title: 'IPS LCD Gaming Monitor',
            stars: 5,
            sale: true,
            saleNum: 30,
            reviews: 99,
            img: "product3",
            price: 370
        },
        {
            id: 4,
            title: 'S-Series Comfort Chair ',
            stars: 4,
            sale: true,
            saleNum: 25,
            reviews: 99,
            price: 375
        },
        {
            id: 5,
            title: 'The north coat ',
            stars: 5,
            sale: false,
            reviews: 65,
            price: 260
        },
        {
            id: 6,
            title: 'Gucci duffle bag',
            stars: 4,
            sale: false,
            reviews: 65,
            price: 960
        },
        {
            id: 7,
            title: 'RGB liquid CPU Cooler',
            stars: 4,
            sale: false,
            reviews: 65,
            price: 160
        },
        {
            id: 8,
            title: 'Small BookSelf',
            stars: 5,
            sale: false,
            reviews: 65,
            price: 360
        },
        {
            id: 9,
            title: 'Breed Dry Dog Food',
            stars: 3,
            sale: false,
            reviews: 35,
            price: 100
        },
        
    ]
    const accounts = [
        {
            id:1,
            name:"Renata",
            email: "renatakov1010@gmail.com",
            password: "Admin1234@",
            address: "Kingston 12, United States",
            basket:[],
            wishlist:[],
            auth_key: "123_r"
        },
        {
            id:2,
            name:"John",
            email: "john123@gmail.com",
            password: "qwerty345",
            address: "Wall Street, London",
            basket:[],
            wishlist:[],
            auth_key: "123_jn"
        },
        
    ]
    it('txt', ()=>{
        render(
            <BrowserRouter>
            <HomePage accounts={accounts} products={products}/>
            </BrowserRouter>
        )
        expect(screen.getByText(/Medicine/)).toBeInTheDocument()
    })
    it('p', () => {
        render(
            <BrowserRouter>
            <HomePage accounts={accounts} products={products}/>
            </BrowserRouter>
        )
        expect(screen.getByText(/GUCCI INTENSE OUD EDP/i)).toBeInTheDocument()
    })
    it('find products', () => {
        render(
            <BrowserRouter>
            <HomePage accounts={accounts} products={products}/>
            </BrowserRouter>
        )
        expect(screen.getByText("Breed Dry Dog Food")).toBeInTheDocument()
        expect(screen.getByText("The north coat")).toBeInTheDocument()


    })
})