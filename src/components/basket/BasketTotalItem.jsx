import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket } from "../../redux/slices/basketSlice";

const BasketTotalItem = () => {
    const dispatch = useDispatch()
    const {totalPrice} = useSelector(state=>state.cards)
  return (
    <div>
      <div className="basket_total_container">
        <h2 className="basket_total_title">Cart totals</h2>
        <div className="basket_total_promo">
          <label htmlFor="">Promo Code</label>
          <input type="text" placeholder="Promo code" />
          <button >Apply coupon</button>
        </div>
        <div className="basket_total_subtotal">
          <div>Subtotal</div>
          <div>{totalPrice}$</div>
        </div>
        <div className="basket_total_shipping">
          <div>Total</div>
          <div>{totalPrice}$</div>
        </div>
        <div className="basket_total_checkout">
            <button>Proceed to checkout</button>
        </div>
        <hr />
        <button onClick={()=>dispatch(deleteBasket())} className="basket_delete_btn">Clear Card</button>
      </div>
    </div>
  );
};

export default BasketTotalItem;
