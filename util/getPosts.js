import { useState, useEffect } from 'react';

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const getPosts = () => {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log('Error getting Content Types.');
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      const allPosts = await fetchEntriesForContentType(contentTypes[0]);
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return posts;
};

export default getPosts;
