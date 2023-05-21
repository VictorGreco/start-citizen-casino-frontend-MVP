import { Header } from '../components/common/Header';
import { StyledFooter } from '../components/common/StyledFooter';

function AuthApp({ Component, pageProps }) {

  return (
    <>
        {<Header />}
        <Component {...pageProps} />
        {<StyledFooter />}
    </>
  );
}

export default AuthApp;
