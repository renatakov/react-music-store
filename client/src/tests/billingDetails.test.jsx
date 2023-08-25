import BillingDetails from "../Components/BillingDetails/BillingDetails";
import {screen, render} from "@testing-library/react"

describe("Billing Details Component Test", ()=>{
    it("Testing Label", () => {
        render(<BillingDetails/>)
        expect(screen.getByText("Phone Number")).toBeInTheDocument()
    })
    it("Testing Btn Text", () => {
        render(<BillingDetails/>);
        expect(screen.getByText("Place Order")).toBeInTheDocument()
    })
})