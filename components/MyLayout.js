import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Header from './organisms/Header';
import Sidebar from './Sidebar';

const LayoutInner = styled.div`
  display: flex;
  padding: 0px 0 0px 0px;
  max-width: 1024px;
  margin: auto;
`;

const Content = styled.main`
  flex: 1;
  margin: 40px 0 0;
  padding: 0px 40px;
  max-width: 700px;
  overflow: hidden;
`;
const BaseStyles = styled.div`
  font-family: 'Roboto';
  color: ${themeGet('colors.black')};
  line-height: ${themeGet('lineHeights.l')};
`;

const Layout = ({ sidebar, children }) => (
  <BaseStyles>
    <LayoutInner>
      <Sidebar />
      <Content>{children}</Content>
    </LayoutInner>
  </BaseStyles>
);

export default Layout;
