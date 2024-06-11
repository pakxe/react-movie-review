import styled from 'styled-components';

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.base}};
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const StyledLayout = { OuterContainer, Wrapper };
