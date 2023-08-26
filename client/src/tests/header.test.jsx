import { BrowserRouter } from "react-router-dom";
import Header from "../Components/Header/Header";
import {render, screen} from "@testing-library/react"

describe("Header Component Tests", () => {
    it("Test span", ()=>{
        render(
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        )
        expect(screen.getByText("Exclusive")).toBeInTheDocument()
    })
})