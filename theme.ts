import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

export const theme = extendTheme({
  config,
  colors: {
    bg: {
      lt: '#F7FAFC',
      base: '#EDF2F7',
      dk: '#E2E8F0',
      dker: '#CBD5E0'
    },
    border: {
      lt: '#E2E8F0',
      base: '#CBD5E0',
      dk: '#A0AEC0'
    },
    text: {
      lt: '#718096',
      base: '#2D3748',
      dk: '#171923'
    },
    link: {
      lt: '#4299e1',
      base: '#3182ce',
      dk: '#2b6cb0'
    }
  },
  components: {
    Card: {
      baseStyle: {
        bg: 'white',
        boxShadow: 'base',
        border: '1px solid',
        borderColor: 'border.base',
        borderRadius: 'base',
        display: 'flex'
      }
    },
    Link: {
      baseStyle: {
        color: 'link.base'
      }
    },
    Skeleton: {
      baseStyle: {
        borderRadius: 'base'
      }
    }
  }
});
