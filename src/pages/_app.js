import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ParallaxProvider>
      <Component {...pageProps} />
      </ParallaxProvider>
    </SessionProvider>
  );
};

export default App;
