import { Order } from '../../interfaces/Order';
import { TableOrderButton } from './TableOrderButton';
import { BoardContainer, BoardContent } from './styles';
import { OrderModal } from '../OrderModal/OrderModal';
import { useState } from 'react';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export const OrdersBoard = ({ icon, title, orders }: OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setSelectedOrder(order);
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setSelectedOrder(null);
    setIsModalVisible(false);
  }

  return (
    <BoardContainer>
      <OrderModal visible={isModalVisible} closeModal={handleCloseModal} order={selectedOrder} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 ? (
        <BoardContent>
          {orders.map((order) => (
            <TableOrderButton
              key={order._id}
              {...order}
              handleClick={() => handleOpenModal(order)}
            />
          ))}
        </BoardContent>
      ) : null}
    </BoardContainer>
  );
};
