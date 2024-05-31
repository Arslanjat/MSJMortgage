import React from 'react';
import MainLayout from '../../layouts/main';
import PageHeader from '../../components/Page-header';
import PostDetails from '../../components/PostDetails';

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="Post Details"
        fullPath={[
          { id: 1, name: 'home', url: '/' },
          { id: 2, name: 'blogs', url: '/blogs' },
        ]}
      />
      <PostDetails />
    </MainLayout>
  );
};

export default BlogDetails;
