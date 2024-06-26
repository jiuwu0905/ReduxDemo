import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {buyCake} from '../redux'


function HookCakeContainer() {
  const numOfCakes =   useSelector(state => state.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HookCakeContainer