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

const Course = () => {
  return (
    <Grid
      as='main'
      mt='40px'
      bg='#F8F9FC'
      w='100%'
      templateColumns={{ base: '1fr' }}
    >
      <GridItem w='100%'>
        <Flex
          w={{ base: '93%' }}
          m='auto'
          direction='column'
          alignItems='center'
        >
          <Box position='relative'>
            <Image src={crown} alt='crown' position='absolute' top='-17px' left='-5px' />
            <Heading textAlign='center'>
              High quality video, audio & live classes
            </Heading>
          </Box>
          <Text
            textAlign='center'
            mt='8px'
            fontSize='8px'
            fontWeight='500'
            lineHeight='15px'
            textTransform='capitalize'
          >
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </Text>
          <Button
            fontSize='8px'
            mt='16px'
            w='83px'
            h='27px'
            color='#FFF'
            bg='#004DB3'
            borderRadius='2.2px'
          >
            View Courses
          </Button>
          <Flex
            w='290px'
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
              w='125.6px'
              h='33.6px'
            >
              <Image src={speaker} alt='speaker' />
              <Text fontSize='8px' fontWeight='700' color='#000F24'>
                Audio Classes
              </Text>
            </Flex>
            <Flex
              bg='white'
              gap='10px'
              justifyContent='space-evenly'
              alignItems='center'
              w='123.6px'
              h='33.6px'
            >
              <Image src={live} alt='live' />
              <Text fontSize='8px' fontWeight='700' color='#000F24'>
                Live Classes
              </Text>
            </Flex>
            <Flex
              bg='white'
              gap='10px'
              justifyContent='space-evenly'
              alignItems='center'
              w='146.6px'
              h='33.6px'
            >
              <Image src={record} alt='record' />
              <Text fontSize='8px' fontWeight='700' color='#000F24'>
                Recorded Classes
              </Text>
            </Flex>
            <Flex
              bg='white'
              gap='10px'
              justifyContent='space-evenly'
              alignItems='center'
              w='117.6px'
              h='33.6px'
            >
              <Image src={notes} alt='notes' />
              <Text fontSize='8px' fontWeight='700' color='#000F24'>
                50+ Notes
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Course;
