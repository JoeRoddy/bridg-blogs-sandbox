import db from 'bridg/app/client/db';
import { NextPage } from 'next';
import BlogList from '@/pages/components/blogs/BlogList';
import { useAsync } from '@/pages/hooks/useAsync';

interface Props {}

const Blogs: NextPage<Props> = ({}) => {
  const blogs = useAsync(() =>
    db.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    }),
  );

  return (
    <div>
      <h2>All Published Blogs:</h2>
      <BlogList blogs={blogs || []} />
    </div>
  );
};

export default Blogs;
