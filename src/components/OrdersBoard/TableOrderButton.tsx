import { Order } from '../../interfaces/Order';

interface TableOrderButtonProps extends Order {
  handleClick: () => void;
}

export const TableOrderButton = ({ _id, table, products, handleClick }: TableOrderButtonProps) => {
  const items = products.length > 1 ? 'Items' : 'Item';
  const totalItems = `${products.length} ${items}`;

  return (
    <button key={_id} type="button" onClick={handleClick}>
      <strong>Mesa {table}</strong>
      <span>{totalItems}</span>
    </button>
  );
};
