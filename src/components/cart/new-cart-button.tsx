import CartIcon from "@components/icons/cart-icon";
import { useUI } from "@contexts/ui.context";
import { useCart } from "@store/quick-cart/cart.context";

const NewCartButton = () => {
  const { openCart } = useUI();
  const { totalItems } = useCart();
  function handleCartOpen() {
    return openCart();
  }

  return (
    <button
      className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
      onClick={handleCartOpen}
      aria-label="cart-button"
    >
      <img src="https://cdn.pnj.io/images/image-update/layout/mobile/icon-shoppingcart.svg" alt="cart"/>
      <span className="cart-counter-badge flex items-center justify-center bg-red-600 text-white absolute -top-3 ltr:-right-2.5 ltr:xl:-right-3 rtl:-left-2.5 rtl:xl:-left-3 rounded-full font-bold">
        {totalItems}
      </span>
    </button>
  );
};

export default NewCartButton;
