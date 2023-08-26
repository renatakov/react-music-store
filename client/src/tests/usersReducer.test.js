
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
    ]
}

const tempUser = {
    name: "Jake",
    age: 25,
    email: 'jake@gmail.com'
}

describe("Test 1", () => {
    it('add user test', () => {
        const newState = authorizationReducer(initialState, addAccountAC(tempUser))
    // expect(newState.list.length).toBe(2)
    expect(newState.accounts[1].name).toBe(tempUser.name)
    })
})