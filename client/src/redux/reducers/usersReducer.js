const ADD_ACCOUNT = "ADD_ACCOUNT";
const UPDATE_NEW_ACCOUNT = "UPDATE_ACCOUNT"
const LOGIN = "LOGIN";
const ADD_TO_CART = "ADD_TO_CART"
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST"
const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST"
const DELETE_FROM_CART = "DELETE_FROM_CART"


const initialState = {
    accounts: [
        {
            id:1,
            name:"Renata",
            email: "renatakov1010@gmail.com",
            password: "Admin1234@",
            address: "Kingston 12, United States",
            bucket:[],
            wishlist:[],
            auth_key: "123_r"
        },
        {
            id:2,
            name:"John",
            email: "john123@gmail.com",
            password: "qwerty345",
            address: "Wall Street, London",
            bucket:[],
            wishlist:[],
            auth_key: "123_jn"
        }
    ],
    newAcconut:{
        id: null,
        name:'',
        email:'',
        password:'',
        address: '',
        bucket:[],
        wishlist:[],
        auth_key: ''
    },
    

};

const addAccount = (state) => {
    console.log(state)
    return{
       ...state,
        accounts:[
            ...state.accounts,
            {...state.newAcconut}
        ],
        newAcconut:{
            id: null,
            name:'',
            email:'',
            password:'',
            address: '',
            bucket:[],
            wishlist:[],
        }
    }
}

const deleteFromCart = (state, action) =>{

}

const deleteFromWishlist = (state, action) =>{

}

const addToWishlist = (state, action) => {

}

const addToCart = (state, action) => {
    return{
    ...state,
    accounts: [
        ...state.accounts.map((item)=>{
            if(item.id === action.idUser){
                item.basket = [
                    ...item.basket,
                    action.idProduct
                ]
            }
            return item
        }),

    ]
    }
    
    };

const updateNewAccount = (state, action) => {
    console.log(action)
    if(action.inputForm === "inputName"){
        return{
            ...state,
                
                newAcconut:{
                    ...state.newAcconut,
                    id: state.accounts[state.accounts.length - 1].id + 1,
                    name: action.inputValue
                    
                }
        }
    }
    if(action.inputForm === "inputEmail"){
        return{
            ...state,
                
                newAcconut:{
                    ...state.newAcconut,

                    id: state.accounts[state.accounts.length - 1].id + 1,
                    email: action.inputValue
                }
        }
    }
    if(action.inputForm === "inputPassword"){
        return{
            ...state,
                
                newAcconut:{
                    ...state.newAcconut,

                    id: state.accounts[state.accounts.length - 1].id + 1,
                    password: action.inputValue
                }
        }
    }
}

const loginToAccount = (state, action) => {
    const loginFilter = state.accounts.filter((account) => {
        // if()
    })
    
}

export const authorizationReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ACCOUNT:{
            return addAccount(state)
        }
        case UPDATE_NEW_ACCOUNT:{
            return updateNewAccount(state, action)
        }
        case LOGIN:{
            return loginToAccount(state, action)
        }
        case ADD_TO_CART:{
            return addToCart(state, action);
        }
        case ADD_TO_WISHLIST:{
            return addToWishlist(state, action)
        }
        case DELETE_FROM_CART:{
            return deleteFromCart(state, action)
        }
        case DELETE_FROM_WISHLIST:{
            return deleteFromWishlist(state, action)
        }
        default:{
            return state
        }
    }
}

export const addAccountAC = (accountName, accountEmail, accountPassword) => 
(
    {
        type: ADD_ACCOUNT,
        accountName,
        accountEmail,
        accountPassword
    }

)

export const updateNewAccountAC = (inputForm, inputValue) => 
(
    {
        type: UPDATE_NEW_ACCOUNT,
        inputForm,
        inputValue
    }
)

export const loginToAccountAC = (inputEmail, inputPassword) => 
(
    {
        type: LOGIN,
        inputEmail,
        inputPassword
    }
)

export const addToCartAC = (idUser, idProduct) =>({
    type: ADD_TO_CART,
    idUser, 
    idProduct
    })
    
    export const addToWishlistAC = (idUser, idProduct) =>({
        type: ADD_TO_WISHLIST,
        idUser, 
        idProduct
        })
    
        export const deleteFromWishlistAC = (idUser, idProduct) => ({
            type: DELETE_FROM_WISHLIST,
            idUser, 
            idProduct
        })

        export const deleteFromCartAC = (idUser, idProduct) => ({
            type: DELETE_FROM_CART,
            idUser, 
            idProduct
        })