import { Order } from '../../interfaces/Order';
import { OrdersBoard } from '../OrdersBoard/OrdersBoard';
import { OrdersContainer } from './styles';

const orders: Order[] = [
  {
    _id: '1',
    table: '1',
    status: 'waiting',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath:
            'https://picsum.photos/id/1/40/60',
          price: 30,
        },
        quantity: 2,
        _id: '1',
      },
    ],
  },
  {
    _id: '2',
    table: '2',
    status: 'preparing',
    products: [
      {
        product: {
          name: 'Coca-cola',
          imagePath: 'https://picsum.photos/id/1/40/60',
          price: 7,
        },
        quantity: 2,
        _id: '2',
      },
      {
        product: {
          name: 'Pizza calabresa',
          imagePath: 'https://picsum.photos/id/1/40/60',
          price: 30,
        },
        quantity: 2,
        _id: '3',
      },
    ],
  },
];

export const Orders = () => {
  return (
    <OrdersContainer>
      <OrdersBoard icon="⌛" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="⏲" title="Em prepação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </OrdersContainer>
  );
};
