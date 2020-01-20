import { plants } from '../../data'
const initialState = {
    plants,
    detailedPlants: {},
    cart: [],
    total: 0,
    quantity: 0,
}


const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_ITEM":
            let addPlant = state.plants.find(plant => plant.id === action.id)
            let existeditem = state.cart.find(item => item.id === action.id)
            if (existeditem) {
                addPlant.quantity += 1;
                addPlant.total += addPlant.price;
                return {
                    ...state,
                    total: state.total + addPlant.price,
                    quantity: state.quantity + 1
                }
            }
            else {
                let newTotal = state.total + addPlant.price
                let newQuantity = state.quantity + 1
                addPlant.quantity = 1;
                addPlant.total = addPlant.price;
                addPlant.inCart = true;
                return {
                    ...state,
                    cart: [...state.cart, addPlant],
                    total: newTotal,
                    quantity: newQuantity
                }
            }
        case "SUB_ITEM":
            let subItem = state.cart.find(item => item.id === action.id)
            if (subItem.quantity === 1) {
                let newItemList = state.cart.filter(item => item.id !== action.id)
                let newtotal = state.total - subItem.price;
                let newquantity = state.quantity - subItem.quantity
                subItem.inCart = false;
                subItem.total -= subItem.price
                return {
                    ...state,
                    cart: newItemList,
                    total: newtotal,
                    quantity: newquantity
                }
            }
            else {
                subItem.quantity -= 1;
                subItem.total = subItem.price * subItem.quantity
                return {
                    ...state,
                    total: state.total - subItem.price,
                    quantity: state.quantity - 1
                }

            }

        case "VIEW_ITEM":
            let viewPlant = state.plants.find(plant => plant.id === action.id)
            return {
                ...state,
                detailedPlants: viewPlant,
            }
        case "REMOVE_ITEM":
            let removeItem = state.cart.find(item => item.id === action.id)
            let newItems = state.cart.filter(item => item.id !== action.id)
            let newTotal = state.total - (removeItem.price * removeItem.quantity)
            let newQuantity = state.quantity - removeItem.quantity
            removeItem.inCart = false;
            return {
                ...state,
                cart: newItems,
                total: newTotal,
                quantity: newQuantity
            }
        default:
            return {
                ...state
            }
    }
}


export default cartReducer;