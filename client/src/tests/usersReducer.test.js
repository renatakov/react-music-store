import { nanoid } from "@reduxjs/toolkit"
import { addAccountAC, authorizationReducer, addToBasketAC, addToWishlistAC, updateNewAccountAC, deleteFromBasketAC } from "../redux/reducers/usersReducer"

const initialState = {
    accounts: [
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
    ],
    newAcconut:{
        name: "Jake",
        age: 25,
        email: 'jake@gmail.com',
        password: "123"
    },
}

const tempUser = {
    name: "Jake",
    age: 25,
    email: 'jake@gmail.com',
    password: "123"
}




describe("Test 1", () => {
    it('add user test', () => {
        const newState = authorizationReducer(
            initialState, 
            addAccountAC(
                tempUser.name,
                tempUser.email,
                tempUser.password
            ))
    console.log(newState)
    expect(newState.accounts.length).toBe(2)
    expect(newState.accounts[1].name).toBe(tempUser.name)
    })
    it('update new account', () => {
        const newState = authorizationReducer(initialState, updateNewAccountAC("inputEmail", "john345@gmail.com"))
        const newState2 = authorizationReducer(initialState, updateNewAccountAC("inputName", "John"))
        const newState3 = authorizationReducer(initialState, updateNewAccountAC("inputPassword", "qwerty54321!"))
        expect(newState.newAcconut.email).toBe("john345@gmail.com")
        expect(newState2.newAcconut.name).toBe("John")
        expect(newState3.newAcconut.password).toBe("qwerty54321!")

    })
    it('add to basket', () => {
        const newState = authorizationReducer(initialState, addToBasketAC(initialState.accounts[0].auth_key, 3))
        // console.log(...newState.accounts[0].basket)
        expect(newState.accounts[0].basket.length).toBe(1); // Перевірка довжини масиву basket
        expect(newState.accounts[0].basket[0]).toBe(3)
    })
    it('add to wishlist', () => {
        const newState = authorizationReducer(initialState, addToWishlistAC(initialState.accounts[0].auth_key, 4))
        expect(newState.accounts[0].wishlist.length).toBe(1); // Перевірка довжини масиву basket
        expect(newState.accounts[0].wishlist[0]).toBe(4)
    })
    it("delete from basket", () => {
        const newState = authorizationReducer(initialState, deleteFromBasketAC(initialState.accounts[0].auth_key, 3))
        expect(newState.accounts[0].basket.length).toBe(0)
    })
})