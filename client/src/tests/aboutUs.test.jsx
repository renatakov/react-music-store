import AboutUs from "../Components/AboutUs/AboutUs";
import {render, screen} from "@testing-library/react"

describe("AboutUs Component Test", () => {
    it("Testing h2", () => {
        render(<AboutUs/>)
        expect(screen.getByText("Our Story")).toBeInTheDocument()
    })
    it("Testing p", () => {
        render(<AboutUs/>)
        expect(screen.getByText(/South Asia’s premier/)).toBeInTheDocument()
    })
    it("Testing span", () => {
        render(<AboutUs/>)
        expect(screen.getByText("45.5k")).toBeInTheDocument()
    })
})