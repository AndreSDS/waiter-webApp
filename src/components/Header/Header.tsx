import logo from '../../assets/images/logo.svg';

import { Content, HeaderContainer } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <div>
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="Logo" />
      </Content>
    </HeaderContainer>
  );
};
