import { cart } from "../../data/cart.js";

export function renderCartQuantity() {
  let cartQuantity = getCartQuantity();

  if (cartQuantity === 1) {
    document.querySelector(
      ".js-return-to-home-link"
    ).innerHTML = `${cartQuantity} item`;
  } else {
    document.querySelector(
      ".js-return-to-home-link"
    ).innerHTML = `${cartQuantity} items`;
  }
}

export function getCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}
