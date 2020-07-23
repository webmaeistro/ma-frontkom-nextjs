import Link from 'next/link';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Logo from './atoms/Logo';
import getPosts from '../util/getPosts';

const nanoid = require('nanoid');

const SidebarStyles = styled.aside`
  flex-shrink: 0;
  min-height: calc(100vh - 80px);
  padding-right: 0px;
  box-sizing: content-box;
  border-right: 1px solid rgb(210, 210, 210);
  min-width: 200px;
`;

const SubMenu = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 20px;
  padding-right: 20px;
  margin: 40px 0 0;
  font-size: 20px;
  position: sticky;
  top: 40px;
  min-width: 250px;
`;
const SubMenuItem = styled.li`
  margin-bottom: 23px;
  a {
    padding-left: 0;
    background-color: transparent;
    color: inherit;
    text-decoration: none;
  }
  a.active {
    font-weight: 700;
  }
`;

const StyledLogo = styled(Logo)`
  margin-left: 10px;
`;

const PostLink = ({ id, slug, title }) => (
  <SubMenuItem>
    <Link as={`/post/${slug}`} href={`/post/${slug}`}>
      <a>{title}</a>
    </Link>
  </SubMenuItem>
);

const Sidebar = () => {
  const data = getPosts();

  return (
    <SidebarStyles>
      <StyledLogo />
      <SubMenu>
        {data.map(article => (
          <PostLink
            key={nanoid()}
            id={article.sys.id}
            slug={article.fields.slug}
            title={article.fields.title}
          />
        ))}
      </SubMenu>
    </SidebarStyles>
  );
};

export default Sidebar;
