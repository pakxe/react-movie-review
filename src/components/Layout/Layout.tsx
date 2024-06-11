import { ReactNode } from 'react';
import { StyledLayout as S } from './Layout.style';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.OuterContainer>
      <S.Wrapper>{children}</S.Wrapper>
    </S.OuterContainer>
  );
};

export default Layout;
