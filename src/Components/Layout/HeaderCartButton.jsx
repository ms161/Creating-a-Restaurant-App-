import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'

const HeaderCartButton = (props) => {

 const cartCtx= useContext(CartContext)
 const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
  console.log(curNumber,item.amount  ,'header')
  return curNumber+item.amount 
 },0) 


  return (
    <>
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
<CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
    </>
  )
}

export default HeaderCartButton