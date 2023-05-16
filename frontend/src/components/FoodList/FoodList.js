import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FoodList = () => {

  const foodItems = useSelector(state => state.foodItems)




  return (
    <div>FoodList</div>
  )
}

export default FoodList