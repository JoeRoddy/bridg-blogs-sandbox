import { getUserId } from '@/pages/_app';
import { useAsync } from '@/pages/hooks/useAsync';
import db from 'bridg/app/client/db';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {}

const BlogPage: NextPage<Props> = ({}) => {
  const router = useRouter();
  const userId = getUserId();
  const blogId = router.query.blogId as string;

  const blog = useAsync(() => db.blog.findUnique({ where: { id: blogId }, include: { user: true } }), [blogId]);

  // loading
  if (!blog) return <></>;

  return (
    <div>
      <h3>{blog.title}</h3>
      <i>{!blog.published && 'Not'} Published</i>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {blog.user && (
          <>
            Author:
            {blog.user.image && <img style={{ height: 30, width: 30, borderRadius: 15 }} src={blog.user.image} />}
            <a href={`/blogs/user/${blog.user.id}`}>{blog.user.name}</a>
          </>
        )}
      </div>
      <p>{blog.body}</p>
      {blog.userId === userId && (
        <>
          <button onClick={() => router.push(`/blogs/edit/${blogId}`)}>Edit</button>
          <button
            onClick={async () => {
              await db.blog.delete({ where: { id: blogId } });
              router.push('/blogs/user/me');
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default BlogPage;
