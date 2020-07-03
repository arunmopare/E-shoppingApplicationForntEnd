export const addItemToCart = (iteam, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...iteam,
      count: 1,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
