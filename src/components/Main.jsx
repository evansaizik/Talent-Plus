import { Box, Text, Flex, HStack, Button, Image } from '@chakra-ui/react';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import reviews from '../assets/reviews.svg';
import Hero from './Hero';


const Main = () => {
  return (
    <Flex
      as='main'
      w='100%'
      bg='#004DB3'
      color='white'
      alignItems='center'
      direction={{ base: 'column', md: 'row' }}
    >
      <Box as='section' w={{base: '93%', md: '65%'}}>
        <Text
          ml={{ base: '0', md: '16.9%' }}
          fontSize={{base: '32px', md: '64px'}}
          fontWeight='700'
          lineHeight={{md: '82px'}}
          textAlign={{ base: 'center', md: 'start' }}
        >
          Grow your skills to advance your career path
        </Text>
        <Text
          mt='9px'
          mx={{ base: 'auto' }}
          w={{ base: '70%' }}
          ml={{ md: '16.9%' }}
          fontSize={{base: '8px', md: '16px'}}
          textAlign={{ base: 'center', md: 'start' }}
        >
          build your future with our quality education. the best and largest
          all-in-one online tutoring platform in the world
        </Text>
        <HStack
          mt='26px'
          justifyContent={{ base: 'center', md: 'flex-start' }}
          gap={4}
          ml={{ md: '16.9%' }}
        >
          <Button
            borderRadius='none'
            fontSize='8px'
            border='1px'
            w='110px'
            h='28px'
            bg='#004DB3'
            rightIcon={<ArrowTopRightIcon />}
          >
            Get Started Now
          </Button>
          <Button
            bg='white'
            fontSize='8px'
            w='73px'
            h='27px'
            border='none'
            borderRadius='none'
            color='#004DB3'
          >
            Enrol Now
          </Button>
        </HStack>
        <Flex
          mt='20px'
          justifyContent={{ base: 'center', md: 'flex-start' }}
          alignItems='center'
          ml={{ md: '16.9%' }}
        >
          <Image src={reviews} alt='reviews' />
          <Box w='50px' border='none'>
            <Text
              lineHeight='1'
              border='none'
              fontSize='13.4px'
              fontWeight='900'
            >
              255K+
              <Text as='small' fontWeight='light' border='none'>
                Previews
              </Text>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Hero />
    </Flex>
  );
};

export default Main;
