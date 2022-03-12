import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="th">
      <Head>
        {/* GTAG comcamp.io */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VK7FH4PWCE"></script>
        <script
						dangerouslySetInnerHTML={{
							__html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-VK7FH4PWCE');`,
						}}>
        </script>
        {/* Microsoft Clarity */}
        <script
						dangerouslySetInnerHTML={{
							__html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "azv1jrkt9x");`,
						}}>
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
