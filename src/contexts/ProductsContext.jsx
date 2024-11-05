import { createContext, useState } from "react";

export const CartContext = createContext();

const ProductsContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    setCartItems((Items) => {
      // Check if product already in cart
      if (Items.find((item) => item.product_id === product.product_id)) {
        return Items;
      } else{
        alert('already added')
      }
      return [...Items, product];
    });
  };

  /*  const addToWishList = (product) => {
    if (!wishList.find((item) => item.product_id === product.product_id)) {
      setWishList((Items) => [...Items, product]);
    }
  }; */

  // Add to Wishlist
  const addToWishList = (product) => {
    setWishList((Items) => {
      // Check if product already in wishlist
      if (Items.find((item) => item.product_id === product.product_id)) {
        return Items;
      } else{
        alert('Already added')
      }
      return [...Items, product];
    });
  };

  // Calculate total cart price
  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  // Sort cart items
  const sortCartByPrice = () => {
    setCartItems((Item) =>
      [...Item].sort((a, b) => b.price - a.price)
    );
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          cartItems,
          wishList,
          addToCart,
          addToWishList,
          totalCartPrice,
          sortCartByPrice,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default ProductsContext;
