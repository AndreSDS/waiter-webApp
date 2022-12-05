import { priceFormat } from '../../utils/formatCurrency';
import { OrderItem } from './styles';

interface OrderItemProps {
  _id: string;
  quantity: number;
  product: {
    name: string;
    imagePath: string;
    price: number;
  };
}

export const OrderItemComponent = ({
  _id,
  quantity,
  product,
}: OrderItemProps) => {
  return (
    <OrderItem>
      <img src={product.imagePath} alt={product.name} />
      <span>{quantity}x</span>

      <div>
        <strong>{product.name}</strong>
        <span>{priceFormat(product.price)}</span>
      </div>
    </OrderItem>
  );
};
