import styled from 'styled-components';


export const BoardContainer = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204,204,204,0.4);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 326px;
  margin: 0 auto;

  > header {
    padding: 0.5rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const BoardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  button {
    width: 100%;
    background-color: #fff;
    border: 1px solid rgba(204,204,204,0.4);
    border-radius: 0.5rem;
    height: 8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.9rem;
    }
  }
`;
