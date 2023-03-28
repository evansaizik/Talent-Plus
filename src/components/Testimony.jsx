import { Box, Text, Heading, Image } from '@chakra-ui/react';
import pagination from '../assets/pagination.svg';
import Slider from './Slider';

const Testimony = () => {
  return (
    <Box bg="#F8F9FC" pb="40px">
      <Box pt={{ base: '70px', md: '135' }} m="auto">
        <Heading fontSize={{ base: '24px', lg: '56px' }} textAlign="center">
          What Our Clients Are Saying
        </Heading>
        <Text
          textAlign="center"
          mx="auto"
          lineHeight={{ base: '16px', md: '28px' }}
          pt={{ abse: '3px', md: '8px' }}
          w={{ base: '290px', md: '480px', lg: '743px' }}
          color="#A1A1A1"
          fontFamily="Satoshi"
          fontSize={{ base: '8px', md: '16px' }}
        >
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </Text>
      </Box>
      <Box as="section" w="full">
        <Slider />
        <Image
          pt={{ base: '10px', lg: '0px' }}
          m="auto"
          src={pagination}
          alt="pagination"
        />
      </Box>
    </Box>
  );
};

export default Testimony;
