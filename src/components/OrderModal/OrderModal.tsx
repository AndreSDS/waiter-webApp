import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../interfaces/Order';
import { priceFormat } from '../../utils/formatCurrency';
import { OrderItemComponent } from './OrderItem';
import {
  Overlay,
  ModalContainer,
  StatusContainer,
  OrderDetails,
  OrderTotal,
  Actions,
  PrimaryButton,
  SecondaryButton
} from './styles';

interface OrderModalProps {
  visible: boolean;
  closeModal: () => void;
  order: Order | null;
}

export const OrderModal = ({ visible, closeModal, order }: OrderModalProps) => {
  const { table, status, products } = order || ({} as Order);

  if (!visible) {
    return null;
  }

  const statuses = {
    waiting: {
      title: 'Fila de espera',
      icon: '⌛',
    },
    preparing: {
      title: 'Em prepação',
      icon: '⏲',
    },
    done: {
      title: 'Pronto!',
      icon: '✅',
    },
  };

  const totalOrder = order?.products.reduce((acc, product) => {
    return acc + product.product.price * product.quantity;
  }, 0) || 0;

  return (
    <Overlay>
      <ModalContainer>
        <header>
          <h1>Mesa {table}</h1>
          <button type="button" onClick={closeModal}>
            <img
              src={closeIcon}
              alt="botão para fechar os detalhes do pedido"
            />
          </button>
        </header>

        <StatusContainer>
          <small>Status do Pedido</small>

          <div>
            <span>{statuses[status].icon}</span>
            <strong>{statuses[status].title}</strong>
          </div>
        </StatusContainer>

        <OrderDetails>
          <h4>Items</h4>

          {products.map((product) => (
            <OrderItemComponent key={product._id} {...product} />
          ))}

          <OrderTotal>
            <span>Total</span>
            <strong>{priceFormat(totalOrder)}</strong>
          </OrderTotal>
        </OrderDetails>

        <Actions>
          <PrimaryButton type="button">
            <span>⌛</span>
            <strong>Iniciar preparo</strong>
          </PrimaryButton>

          <SecondaryButton type="button">
            <strong>Cancelar pedido</strong>
          </SecondaryButton>
        </Actions>
      </ModalContainer>
    </Overlay>
  );
};
