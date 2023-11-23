import { ThemeProvider } from '@emotion/react';
import { Analytics } from '@vercel/analytics/react';
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
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
