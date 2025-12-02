import React from "react";
import axios from "axios";

function useMenuItems() {
  const [menuItems, setMenuItems] = React.useState([]);

  React.useEffect(() => {
    (async function () {
      const response = await axios.get("http://localhost:5000/menu");

      setMenuItems(response.data);
    })();
  }, []);

  return menuItems;
}

export function Menu() {
  const [cart, setCart] = React.useState([]);

  console.log(cart);
  const menuItems = useMenuItems();

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <section>
      <div className="menu-category">
        {menuItems.map((item, i) => (
          <div className="menu-item" key={i}>
            <img
              src={"/static/" + item.image_url}
              alt={item.name}
              className="menu-img"
            />
            <div className="menu-item-details">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <div className="menu-bottom">
                <span className="price">{item.price}</span>
                <button
                  className="order-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart Sidebar */}
      <div className="cart-sidebar">
        <h4>Your Order</h4>
        {cart.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          <ul>
            {cart
              .filter((x) => x)
              .map((item, i) => (
                <li key={i}>
                  {item.name} <span>{item.price}</span>
                </li>
              ))}
          </ul>
        )}
        {cart.length > 0 && (
          <p className="total">
            Total:
            <strong>
              KSh{" "}
              {cart
                .filter((x) => x)
                .reduce((sum, item) => sum + parseInt(item.price), 0)
                .toLocaleString()}
            </strong>
          </p>
        )}
      </div>
    </section>
  );
}
