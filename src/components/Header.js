import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <title>Comcamp 33</title>
      <link rel="icon" type="image/png" href="assets/comcamp.png" />

      <meta name="description" content="โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น หรือ Comcamp ครั้งที่ 33" />
        <meta property="og:url" content="https://comcamp.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Comcamp 33" />
        <meta property="og:description" content="โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น หรือ Comcamp ครั้งที่ 33" />
        <meta property="og:image" content="https://comcamp.io/assets/opengraph.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="comcamp.io" />
        <meta property="twitter:url" content="https://comcamp.io/" />
        <meta name="twitter:title" content="Comcamp 33" />
        <meta name="twitter:description" content="โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น หรือ Comcamp ครั้งที่ 33" />
        <meta name="twitter:image" content="https://comcamp.io/assets/opengraph.png" />
    </Head>
  );
};

export default Header;
