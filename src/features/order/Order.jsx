import { calcMinutesLeft, formatCurrency, formatDate } from '../utils/helpers';

function Order() {
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart, // Corrected the variable name (cart, not Cart)
  } = Order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Order ID: {id}</h2> {/* Use id */}
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>

      {/* Display cart items */}
      <ul>
        {cart.map((item) => (
          <li key={item.pizzaId}>
            {item.quantity}x {item.name} - {formatCurrency(item.totalPrice)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Order;
