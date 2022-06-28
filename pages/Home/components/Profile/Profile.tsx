import {
  Avatar,
  Heading,
  HStack,
  Link,
  Skeleton,
  VStack
} from '@chakra-ui/react';
import { Card } from 'components';

import { User } from 'types/user';

export interface ProfileProps {
  user: User;
  isLoading: boolean;
}

export function Profile(props: ProfileProps) {
  const {
    user: { avatar_url, name, login, html_url },
    isLoading
  } = props;

  return (
    <Card h={40} overflow={'hidden'} w={'full'}>
      <HStack alignItems={'stretch'} h={'full'} spacing={0}>
        <Skeleton isLoaded={!isLoading}>
          <Avatar
            borderRadius={0}
            boxSize={40}
            name={name}
            src={avatar_url}
          />
        </Skeleton>

        <VStack
          flex={1}
          justifyContent={'center'}
          textAlign={'center'}
          px={8}
          py={4}
        >
          <Skeleton isLoaded={!isLoading}>
            {name && (
              <Heading noOfLines={2} size={'lg'}>
                {name}
              </Heading>
            )}
          </Skeleton>

          <Skeleton isLoaded={!isLoading}>
            {login && (
              <Link noOfLines={1} href={html_url}>
                @{login}
              </Link>
            )}
          </Skeleton>
        </VStack>
      </HStack>
    </Card>
  );
}
