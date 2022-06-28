import { useState } from 'react';

import { Box, Container, VStack } from '@chakra-ui/react';
import { Profile, Search } from './components';

export function Home() {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box bg={'bg.lt'} h={'100vh'} w={'100vw'}>
      <Container maxW={'xl'}>
        <VStack p={8} spacing={8}>
          <Search
            setIsLoading={setIsLoading}
            setSearch={setSearch}
            setUser={setUser}
          />
          {search && <Profile isLoading={isLoading} user={user} />}
        </VStack>
      </Container>
    </Box>
  );
}
