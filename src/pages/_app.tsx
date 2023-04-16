import { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export const getUserId = () => 'test';

const Header = () => (
  <>
    <div style={{ display: 'flex', gap: 10 }}>
      <Link href="/">All Blogs</Link>
      <Link href="/blogs/user/me">My Blogs</Link>
      <Link href="/blogs/create">Create blog</Link>
    </div>
  </>
);
