import classes from './Header.module.css'
import React from 'react'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
   <>
   <header className={classes.header}>
    <h1>ReactMeals</h1>
   <HeaderCartButton/>
   </header>
   <div className={classes['main-image']}>
    <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt="A table full of delecious food" />
   </div>
   </>
  )
}

export default Header