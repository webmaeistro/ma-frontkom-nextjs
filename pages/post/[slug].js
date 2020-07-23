import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import styled from 'styled-components';
import parse from 'html-react-parser';
import nanoid from 'nanoid';
import Layout from '../../components/MyLayout';
import Title from '../../components/atoms/Title';
import Text from '../../components/atoms/Text';
import Box from '../../components/atoms/Box';
import '../../style.scss';
import getPosts from '../../util/getPosts';
import getPost from '../../util/getPost';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node =>
      `<img class="img" src="${node.data.target.sys.id}" id="" alt='oi' />`
  }
};

const StyledTitle = styled(Title)`
  font-family: 'adelle-sans';
`;

const swapUrlForID = async (string, slug) => {
  const newString = string;
  const assetArray = getAssets(slug)
    .then(assets =>
      assets.map(a => {
        const obj = {};
        obj.id = a.sys.id;
        obj.url = a.fields.file.url;
        return obj;
      })
    )
    .then(a => a.map(object => newString.replace(object.id, object.url)));
  return assetArray;
};

const Content = ({ content, title, slug }) => {
  if (content !== '') {
    if (Array.isArray(content)) {
      content = content.toString();
    }

    content = documentToHtmlString(content);
    const parsed = parse(content);

    return (
      <div>
        <Title is="h2" size="h2">
          {title}
        </Title>
        <Box>{parsed}</Box>
      </div>
    );
  }
  return '';
};

const Post = ({ slug }) => {
  const { title, content } = getPost({ slug }) || 'w';
  return (
    <Layout>
      <Content title={title} content={content} slug={slug} />
    </Layout>
  );
};

Post.getInitialProps = async ({ query }) => ({ slug: query.slug });

export default Post;
