import BlogList from '@/pages/components/blogs/BlogList';
import { Blog } from '@prisma/client';
import { NextPage } from 'next';
import db from 'bridg/app/client/db';

import { useEffect, useState } from 'react';
import { getUserId } from '@/pages/_app';
import { useAsync } from '@/pages/hooks/useAsync';

interface Props {}

const Blogs: NextPage<Props> = ({}) => {
  const userId = getUserId();
  console.log('uid:', userId);

  const blogs = useAsync(() => db.blog.findMany({ where: { userId } }), [userId]);
  console.log('blogs', blogs);

  return (
    <div>
      <h2>My Blogs:</h2>
      <BlogList blogs={blogs || []} />
    </div>
  );
};

export default Blogs;
