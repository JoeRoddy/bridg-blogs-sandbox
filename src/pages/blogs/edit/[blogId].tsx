import BlogForm from '@/pages/components/blogs/BlogForm';
import db from 'bridg/app/client/db';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAsync } from '@/pages/hooks/useAsync';

interface Props {}

const EditBlogPage: NextPage<Props> = ({}) => {
  const router = useRouter();
  const blogId = router.query.blogId as string;

  const blog = useAsync(() => db.blog.findUnique({ where: { id: blogId } }), [blogId]);

  return blog ? (
    <BlogForm
      onSubmit={async (data) => {
        await db.blog.update({ where: { id: blogId }, data });
        router.push(`/blogs/${blog.id}`);
      }}
      onCancel={() => router.push(`/blogs/${blog.id}`)}
      defaultValues={{ title: blog.title, body: blog.body || '', published: blog.published }}
    />
  ) : (
    <p>loading..</p>
  );
};

export default EditBlogPage;
