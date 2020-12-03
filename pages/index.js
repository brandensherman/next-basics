import Head from 'next/head';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/pokemon');
  };

  return (
    <>
      <Head>
        <title>Next Basics</title>
      </Head>
      <div>Welcome</div>
      <button onClick={handleClick}>Pokemon</button>
    </>
  );
};

export default Home;
