import {render, screen} from "@testing-library/react"
import Footer from "../Components/Footer/Footer"
import { BrowserRouter } from "react-router-dom"

describe("Footer Component Tests", () => {
    it("Test paragraph", ()=>{
        render(
            <BrowserRouter>
        <Footer/>
            </BrowserRouter>
        )
        expect(screen.getByText(/111/)).toBeInTheDocument()
    })
    it("Test heading", () => {
        render(
            <BrowserRouter>
            <Footer/>
            </BrowserRouter>
        )
        expect(screen.getByText(/Quick\sLink/)).toBeInTheDocument()
    })
})