//https://youtube.com/watch?v=YAevAj6X6XU&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=7


const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'




function buyCake(){
    return {
        type : BUY_CAKE,
        info : 'First redux action'
    }
}

function buyIceCream(){
    return {
        type : BUY_ICE_CREAM
    }
}

// (previous, action) => newState

const initialCakeState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialCakeState,action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        default: return state;
    }
}

const initialIceCreamState = {
    numOfIceCream: 20
}

const iceCreamReducer = (state = initialIceCreamState,action) => {
    switch(action.type){
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream -1
        }

        default: return state;
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)

console.log("Initial state",store.getState())

const unsubscribe = store.subscribe(()=> console.log("Updated State",store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// 注销
unsubscribe()



