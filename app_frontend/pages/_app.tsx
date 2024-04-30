import { createGlobalStyle } from "styled-components";
import type { AppProps } from "next/app";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Jersey+25&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');

  body{
    padding: 0;
    margin: 0 ;    
    overflow-x: hidden;
  }
  `;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  );
}