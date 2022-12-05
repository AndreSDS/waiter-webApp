import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 480px;
  background: #fff;
  border-radius: 0.5rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: 600;
      font-size: 1.5rem;
    }

    button {
      border: 0;
      background: transparent;
      line-height: 0;
    }
  }
`;

export const StatusContainer = styled.div`
  margin-top: 2rem;

  small {
    opacity: 0.8;
  }

  div {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  h4 {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

export const OrderItem = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: flex-start;

  img {
    border-radius: 0.5rem;
  }

  > span {
    font-size: 0.9rem;
    color: #666;
    display: block;
    min-width: 1.25rem;
    margin-left: 1rem;
  }

  div {
    margin-left: 0.25rem;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 0.25rem;
    }

    span {
      font-size: 0.9rem;
      color: #666;
    }
  }
`;

export const OrderTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;

  span {
    font-size: 0.9rem;
    font-weight: 500;
    opacity: 0.8;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PrimaryButton = styled.button`
  background: #333;
  border: 0;
  border-radius: 3rem;
  color: #fff;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  margin-top: 1.5rem;
  transition: filter 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const SecondaryButton = styled.button`
  border: 0;
  background: transparent;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D73035;
`;
