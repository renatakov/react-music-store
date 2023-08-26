import Contact from "../Components/Contact/Contact";
import {render, screen} from "@testing-library/react"

describe("Contact Component Testing", ()=>{
    it("Testing some text", () => {
        render(<Contact />)
        expect(screen.getByText(/customer/)).toBeInTheDocument()
    })

    it("Testing an image", () => {
        render(<Contact />)
        expect(screen.getByAltText("iconMail")).toBeInTheDocument()
    })
    it("Testing input placeholder", () => {
        render(<Contact/>)
        expect(screen.getByPlaceholderText("Your Email")).toBeInTheDocument()
    })
})