import BlogList from '@/pages/components/blogs/BlogList';
import db from 'bridg/app/client/db';
import { NextPage } from 'next';

import { getUserId } from '@/pages/_app';
import { useAsync } from '@/pages/hooks/useAsync';

interface Props {}

const Blogs: NextPage<Props> = ({}) => {
  const userId = getUserId();
  const blogs = useAsync(() => db.blog.findMany({ where: { userId } }), [userId]);

  return (
    <div>
      <h2>My Blogs:</h2>
      <BlogList blogs={blogs || []} />
    </div>
  );
};

export default Blogs;
