import Head from 'next/head';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Next Basics Blog</title>
      </Head>
      <div>Welcome to the blog</div>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </>
  );
};

export default Blog;
