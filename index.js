//https://youtube.com/watch?v=YAevAj6X6XU&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=7


const redux = require('redux')
const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE'



function buyCake(){
    return {
        type : BUY_CAKE,
        info : 'First redux action'
    }
}

// (previous, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        default: return state;
    }

}

const store = createStore(reducer)

console.log("Initial state",store.getState())

const unsubscribe = store.subscribe(()=> console.log("Updated State",store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()



