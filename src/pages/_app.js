import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
};

export default App;
