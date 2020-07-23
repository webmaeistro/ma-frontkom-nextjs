import getPosts from './getPosts';

const getPost = ({ slug }) => {
  const posts = getPosts();
  return posts.filter(post => post.fields.slug === slug).map(post => post.fields)[0];
};

export default getPost;
