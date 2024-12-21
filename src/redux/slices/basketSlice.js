import { createSlice } from "@reduxjs/toolkit";

const fetchLocalStorage = () => {
  let basket = localStorage.getItem("basket");
  return basket ? JSON.parse(basket) : [];
};

const fetchLocalCount = () => {
  let count = localStorage.getItem("count");
  return count ? JSON.parse(count) : 0;
};

const storeLocalStorage = (data) => {
  localStorage.setItem("basket", JSON.stringify(data));
};

const storeLocalCount = (count) => {
  localStorage.setItem("count", JSON.stringify(count));
};

const calculateTotalPrice = (basket) => {
  return basket.reduce((total, item) => total + item.price * item.quantity, 0);
};

const initialState = {
  basket: fetchLocalStorage(),
  totalPrice: calculateTotalPrice(fetchLocalStorage()),
  count: Math.max(fetchLocalCount(), 0),
};

export const basketSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingItem = state.basket.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }

      state.count++;
      state.totalPrice = calculateTotalPrice(state.basket);

      storeLocalStorage(state.basket);
      storeLocalCount(state.count);
    },
    removeFromBasket: (state, action) => {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );

      if (index >= 0) {
        state.count -= state.basket[index].quantity;
        state.basket.splice(index, 1);
        state.totalPrice = calculateTotalPrice(state.basket);
      } else {
        console.warn(
          `Cannot remove product (id: ${action.payload}) as it's not in basket!`
        );
      }

      storeLocalStorage(state.basket);
      storeLocalCount(state.count);
    },
    deleteBasket: (state) => {
      state.basket = [];
      state.totalPrice = 0;
      state.count = 0;

      storeLocalStorage(state.basket);
      storeLocalCount(state.count);
    },
    increment: (state, action) => {
      const existingItem = state.basket.find(
        (basketItem) => basketItem.id === action.payload
      );

      if (existingItem) {
        existingItem.quantity++;
        state.count++;
        state.totalPrice = calculateTotalPrice(state.basket);

        storeLocalStorage(state.basket);
        storeLocalCount(state.count);
      } else {
        console.warn(
          `Cannot increment product (id: ${action.payload}) as it's not in basket!`
        );
      }
    },
    decriment: (state, action) => {
      const existingItem = state.basket.find(
        (basketItem) => basketItem.id === action.payload
      );

      if (existingItem) {
        existingItem.quantity--;
        state.count--;

        if (existingItem.quantity <= 0) {
          state.basket = state.basket.filter(
            (basketItem) => basketItem.id !== action.payload
          );
        }

        state.totalPrice = calculateTotalPrice(state.basket);

        storeLocalStorage(state.basket);
        storeLocalCount(state.count);
      } else {
        console.warn(
          `Cannot decrement product (id: ${action.payload}) as it's not in basket!`
        );
      }
    },
    totalAPriceBasket: (state) => {
      state.totalPrice = calculateTotalPrice(state.basket);
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  deleteBasket,
  totalAPriceBasket,
  decriment,
  increment,
} = basketSlice.actions;

export default basketSlice.reducer;
