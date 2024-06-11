import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.base};
  border-bottom: 1px solid ${({ theme }) => theme['base-grayscale-50']};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
`;

export const StyledHeader = {
  Header,
};
