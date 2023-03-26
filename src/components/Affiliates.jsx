import { Box, HStack, Image } from '@chakra-ui/react';
import dropbox from '../assets/dropbox.svg';
import stripe from '../assets/stripe.svg';
import slack from '../assets/slack.svg';
import zoom from '../assets/zoom.svg';
import monday from '../assets/monday.svg';

const Affiliates = () => {
  return (
    <HStack
      justifyContent="space-evenly"
      as="section"
      bg="#CCDBF0"
      w="100%"
      h={{ base: '60px', md: '100px' }}
    >
      <Box w={{ base: '43px', md: '129px' }} h={{ base: '9px', md: '29' }}>
        <Image src={zoom} transform={{ md: 'scale(1)' }} />
      </Box>
      <Box w={{ base: '43px', md: '129px' }} h={{ base: '18px', md: '49' }}>
        <Image src={stripe} transform={{ md: 'scale(.7)' }} />
      </Box>
      <Box w={{ base: '43px', md: '129px' }} h={{ base: '9px', md: '29' }}>
        <Image
          transform={{ base: 'scale(2)', md: 'scale(1.4)' }}
          src={monday}
        />
      </Box>
      <Box w={{ base: '43px', md: '129px' }} h={{ base: '9px', md: '29' }}>
        <Image transform={{ base: 'scale(1.5)', md: 'scale(1)' }} src={slack} />
      </Box>
      <Box w={{ base: '43px', md: '129px' }} h={{ base: '9px', md: '29' }}>
        <Image
          transform={{ base: 'scale(1.8)', md: 'scale(1)' }}
          src={dropbox}
        />
      </Box>
    </HStack>
  );
};

export default Affiliates;
