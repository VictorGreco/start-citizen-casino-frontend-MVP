import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';

function AuthApp({ Component, pageProps }) {

  return (
    <>
        {<Header />}
        <Component {...pageProps} />
        {<Footer />}
    </>
  );
}

export default AuthApp;
