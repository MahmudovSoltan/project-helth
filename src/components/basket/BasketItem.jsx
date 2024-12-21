import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decriment, deleteBasket, increment, removeFromBasket } from "../../redux/slices/basketSlice";

const BasketItem = ({ basket }) => {
  const dispatch = useDispatch();

  return (
    <>
    <div className="basket_item_container">
      {basket.map((item, i) => (
        <div key={i} className="basket_item">
          <div className="basket_item_info">
            <div className="basket_item_img">
              <img src={item.img} alt="" />
            </div>
            <h2>{item.title}</h2>
            {
              item.price===0 ? <div>Free</div> :  <div>{item.price}$</div>
            }
          
          </div>
          <div className="basket_item_action">
            <div className="basket_item_quantity">
              <button onClick={()=>dispatch(decriment(item.id))} >-</button>
              <span>{item.quantity}</span>
              <button onClick={()=>dispatch(increment(item.id))} >+</button>
            </div>
            {
              item.price===0 ? <div>Free</div> :  <div>{item.price * item.quantity}$ </div>
            }
            <div onClick={()=>dispatch(removeFromBasket(item.id))} className="delete_btn">
              <button ><FaTrashAlt /></button>
            </div>
          </div>
        </div>
      ))}

     
    </div>
    </>
  );
};

export default BasketItem;
