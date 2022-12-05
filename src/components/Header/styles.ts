import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #D73035;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1, h2 {
    color: #fff;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.9;
  }
`;
