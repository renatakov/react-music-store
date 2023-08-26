import { nanoid } from "@reduxjs/toolkit"
import { addAccountAC, authorizationReducer } from "../redux/reducers/usersReducer"

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
})