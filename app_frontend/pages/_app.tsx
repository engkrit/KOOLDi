// import { createGlobalStyle } from "styled-components";
// import type { AppProps } from "next/app";

// const GlobalStyles = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Italiana&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Italiana&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
//   body{
//     padding: 0;
//     margin: 0;    
    
//   }
//   `;

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <GlobalStyles/>
//       <Component {...pageProps} />;
//     </>
//   );
// }



import { createGlobalStyle } from "styled-components";
import type { AppProps } from "next/app";
import Document, { Html, Head, Main, NextScript } from "next/document";

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
    width: 100vw;
    height: 100vh;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Link your external stylesheets here */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export { MyDocument };



// class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           {/* Link your external stylesheets here */}
//           <link
//             rel="stylesheet"
//             href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
//           />
//           {/* Add meta viewport for responsiveness */}
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//         </Head>
//         <body style={{ overflowX: "hidden" }}>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export  {MyDocument};
