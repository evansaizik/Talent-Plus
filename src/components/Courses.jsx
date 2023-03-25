import {
  Box,
  Button,
  Text,
  Heading,
  Grid,
  GridItem,
  Flex,
  Image,
} from '@chakra-ui/react';
import crown from '../assets/crown.svg';
import live from '../assets/live.svg';
import record from '../assets/record.svg';
import notes from '../assets/notes.svg';
import speaker from '../assets/speaker.svg';
import bigImage from '../assets/bigImage.svg';
import smallImage from '../assets/smallImage.svg';
import stars from '../assets/stars.svg';

const Courses = () => {
  return (
    <Grid
      as='main'
      pt='40px'
      bg='#F8F9FC'
      h={{md: '650px'}}
      w='100%'
      gap='10px'
      templateRows={{ base: 'repeat(2, 1fr)', md: 'none' }}
      templateColumns={{ md: 'repeat(2, 1fr)' }}
    >
      <GridItem w='100%'>
        <Flex
          w={{ base: '93%' }}
          m='auto'
          mt={{ md: '20px', lg: '90px' }}
          ml={{ md: '10.9%' }}
          direction='column'
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Box position='relative'>
            <Image
              src={crown}
              alt='crown'
              position='absolute'
              top='-17px'
              left='-15px'
            />
            <Heading textAlign={{ base: 'center', md: 'start' }}>
              High quality video, audio & live classes
            </Heading>
          </Box>
          <Text
            textAlign={{ base: 'center', md: 'start' }}
            mt='8px'
            fontSize={{ base: '8px', md: '16px' }}
            fontWeight='500'
            color='#A1A1A1'
            lineHeight={{ base: '15px', md: '28px' }}
            textTransform='capitalize'
          >
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </Text>
          <Button
            mt='16px'
            w={{ base: '83px', md: '166px' }}
            h={{ base: '27px', md: '54px' }}
            color='#FFF'
            bg='#004DB3'
            fontSize={{ base: '8px', md: '16px' }}
            borderRadius={{ base: '2.2px', md: '4px' }}
          >
            View Courses
          </Button>
          <Flex
            w={{ base: '290px', md: '500px' }}
            flexWrap='wrap'
            mt='24px'
            gap={4}
            justifyContent='flex-start'
          >
            <Flex
              bg='white'
              gap='10px'
              justifyContent='space-evenly'
              alignItems='center'
              w={{ base: '125.6px', md: '232px' }}
              h={{ base: '33.6px', md: '72px' }}
            >
              <Image
                src={speaker}
                alt='speaker'
                w={{ base: '', md: '36px' }}
                h={{ base: '', md: '36px' }}
              />
              <Text
                fontSize={{ base: '8px', md: '16px' }}
                fontWeight='700'
                color='#000F24'
              >
                Audio Classes
              </Text>
            </Flex>
            <Flex
              bg='white'
              gap='10px'
              justifyContent='space-evenly'
              alignItems='center'
              w={{ base: '123.6px', md: '218px' }}
              h={{ base: '33.6px', md: '72px' }}
            >
              <Image
                src={live}
                alt='live'
                w={{ base: '', md: '36px' }}
                h={{ base: '', md: '36px' }}
              />
              <Text
                fontSize={{ base: '8px', md: '16px' }}
                fontWeight='700'
                color='#000F24'
              >
                Live Classes
              </Text>
            </Flex>
            <Flex
              bg='white'
              gap='10px'
              justifyContent='space-evenly'
              alignItems='center'
              w={{ base: '146.6px', md: '261px' }}
              h={{ base: '33.6px', md: '72px' }}
            >
              <Image
                src={record}
                alt='record'
                w={{ base: '', md: '36px' }}
                h={{ base: '', md: '36px' }}
              />
              <Text
                fontSize={{ base: '8px', md: '16px' }}
                fontWeight='700'
                color='#000F24'
              >
                Recorded Classes
              </Text>
            </Flex>
            <Flex
              bg='white'
              gap='10px'
              justifyContent='space-evenly'
              alignItems='center'
              w={{ base: '117.6px', md: '207px' }}
              h={{ base: '33.6px', md: '72px' }}
            >
              <Image
                src={notes}
                alt='notes'
                w={{ base: '', md: '36px' }}
                h={{ base: '', md: '36px' }}
              />
              <Text
                fontSize={{ base: '8px', md: '16px' }}
                fontWeight='700'
                color='#000F24'
              >
                50+ Notes
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem bg='#F8F9FC' w='100%'>
        <Box position='relative' mt={{lg: '66px'}} w={{ base: '400px', lg:'500px' }} h='300px' m='auto'>
          <Image
            src={stars}
            alt='stars'
            position='absolute'
            right='10px'
            bottom='30px'
          />
          <Image
            w={{ base: '', md: '330px', lg: '500px' }}
            src={bigImage}
            alt='big image'
            position='absolute'
            top='0px'
            right={{base: '40px', lg: '0px'}}
          />
          <Image
            w={{ base: '', md: '200px', lg: '300px' }}
            src={smallImage}
            alt='small image'
            position='absolute'
            bottom={{ base: '20px', md: '-40px', lg: '-200px' }}
            left={{ base: '5px', md: '-70px', lg: '-150px' }}
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Courses;
