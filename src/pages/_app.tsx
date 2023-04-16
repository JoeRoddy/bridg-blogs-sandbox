import { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps<{}>) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

const getLocalStorage = () => (typeof window === 'undefined' ? null : localStorage);
export const getUserId = () => getLocalStorage()?.getItem('userId');
export const signOut = () => getLocalStorage()?.removeItem('userId');
export const signIn = () => getLocalStorage()?.setItem('userId', 'test');

const Header = () => (
  <>
    <div style={{ display: 'flex', gap: 10 }}>
      <Link href="/">All Blogs</Link>
      <Link href="/blogs/user/me">My Blogs</Link>
      <Link href="/blogs/create">Create blog</Link>
    </div>
  </>
);
