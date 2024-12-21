import React from 'react'
import Banner from '../../components/banner/Banner'
import BasketItem from '../../components/basket/BasketItem'
import { useSelector } from 'react-redux';
import BasketTotalItem from '../../components/basket/BasketTotalItem';
import '../../assets/css/basket.css'
import '../../assets/css/basketresponsive.css'
const Basket = () => {
  const {basket} = useSelector(state=>state.cards)
    
  return (
    <div>
      <Banner title={"Card"}/>
      {
        basket.length === 0 ? <div className="empty_card">Your card is empty</div> :
      <div className="basket_contaainer container">
        <BasketItem basket={basket}/>
        <BasketTotalItem/>
      </div>
      }
    </div>
  )
}

export default Basket
