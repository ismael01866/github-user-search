import 'styles/globals.css';
import { theme } from '../../theme';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
