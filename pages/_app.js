import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// WHAT THIS DO: This is what is serving to the browser basically. It takes in whatever component info and the properties from the page files and builds them into the page you see rendered.
// Don't worry about update this. The Layout component will hole any global elements. The PAGES will hold components and data that are specific to them.
