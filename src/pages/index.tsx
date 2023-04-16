import BlogList from '@/pages/components/blogs/BlogList';
import { useAsync } from '@/pages/hooks/useAsync';
import db from 'bridg/app/client/db';
import { NextPage } from 'next';

interface Props {}

const AllBlogs: NextPage<Props> = ({}) => {
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

export default AllBlogs;
