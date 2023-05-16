import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';

function AuthApp({ Component, pageProps }) {
  const strippedMode = pageProps.vendorInfo?.strippedMode;

  return (
    <>
        {!strippedMode && <Header />}
        <Component {...pageProps} />
        {!strippedMode && <Footer />}
    </>
  );
}

export default AuthApp;
