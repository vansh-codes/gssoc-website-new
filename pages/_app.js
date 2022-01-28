import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (

    <ThemeProvider enableSystem={true} attribute="class">
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
</ThemeProvider>

  );
}

export default MyApp;
