import BlogList from '@/pages/components/blogs/BlogList';
import { useAsync } from '@/pages/hooks/useAsync';
import db from 'bridg/app/client/db';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {}

const Blogs: NextPage<Props> = ({}) => {
  const userId = useRouter().query.userId as string;
  const user = useAsync(
    () =>
      db.user.findUnique({
        where: { id: userId },
        include: { blogs: { where: { published: true } } },
      }),
    [userId],
  );

  return user ? (
    <div>
      <h2>{user.name}'s Blogs:</h2>
      {user.blogs && <BlogList blogs={user.blogs} />}
    </div>
  ) : (
    <></>
  );
};

export default Blogs;
