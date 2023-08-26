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
        }
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
})