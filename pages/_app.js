import { ThemeProvider } from '@emotion/react';
import Layout from '../components/Layout';
import theme from '../themes/baseTheme';
import "../fontawesome";
import '../styles/globals.css';
import "react-multi-carousel/lib/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
