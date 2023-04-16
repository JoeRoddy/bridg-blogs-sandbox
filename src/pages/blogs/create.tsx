import { getUserId } from '@/pages/_app';
import BlogForm from '@/pages/components/blogs/BlogForm';
import db from 'bridg/app/client/db';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const CreateBlogPage: NextPage<{}> = ({}) => {
  const router = useRouter();

  return (
    <BlogForm
      onSubmit={async (blog) => {
        const newBlog = await db.blog.create({
          data: { ...blog, userId: getUserId() },
        });
        router.push(`/blogs/${newBlog.id}`);
      }}
    />
  );
};

export default CreateBlogPage;
