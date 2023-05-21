import { StyledHeader } from '../components/common/StyledHeader';
import { StyledFooter } from '../components/common/StyledFooter';

function AuthApp({ Component, pageProps }) {

  return (
    <>
        {<StyledHeader />}
        <Component {...pageProps} />
        {<StyledFooter />}
    </>
  );
}

export default AuthApp;
