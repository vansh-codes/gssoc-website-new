import React, { Fragment } from 'react';
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import ChatwootWidget from "../components/ChatwootWidget"
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <ChakraProvider>
        <Layout>
          <Fragment>
            <ChatwootWidget />
              <NextNProgress
                color="#FF7A19"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
                options={{ showSpinner: false }}
              />
              <Component {...pageProps} />
          </Fragment>
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
