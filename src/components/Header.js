import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <title>Comcamp 33</title>
      <link rel="icon" type="image/png" href="assets/comcamp.png" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://comcamp.io" />
      <meta property="og:title" content="Comcamp33" />
      <meta property="og:description" content="Comcamp33 ..." />
      <meta property="og:image" content="https://comcamp.io/assets/comcmap.png" />
    </Head>
  );
};

export default Header;
