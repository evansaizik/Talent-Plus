import {
  Grid,
  GridItem,
  Flex,
  Box,
  Heading,
  Button,
  Image,
  Text,
  Card,
  CardHeader, CardBody
} from '@chakra-ui/react';
import boy from '../assets/boy.svg';
import grad from '../assets/grad.svg';
import time from '../assets/time.svg';
import dollar from '../assets/dollar.svg';
import people from '../assets/people.svg';

const Course = () => {
  return (
    <Grid
      as='main'
      bg='#F8F9FC'
      w='100%'
      h={{base: '', md: '600px'}}
      gap='10px'
      pt={{ base: '50px', md: '0' }}
      templateRows={{ base: 'repeat(2, 1fr)', md: 'none' }}
      templateColumns={{ md: 'repeat(2, 1fr)' }}
    >
      <GridItem bg='#F8F9FC' w='93%' m='auto'>
        <Box w={{md: '80%'}} ml={{md: '10.9%'}}>
        <Heading textAlign={{ base: 'center', md: 'start' }}>
          This is Why We Are Best From Theirs
        </Heading>
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
        <Image w='100%' mt='20px' src={boy} alt='stars' />
        </Box>
      </GridItem>
      <GridItem w='100%' mt={{ base: '10px', md: '20px' }}>
        <Grid
          w={{ base: '93%', md: '80%' }}
          m='auto'
          mt={{ md: '20px', lg: '50px' }}
          mr={{ md: '16.9%' }}
          gap={{base: '10px'}}
          templateColumns='repeat(2, 1fr)'
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Card shadow='none' w={{base: '100%'}}>
            <CardHeader>
              <Image src={grad} alt='grad' />
            </CardHeader>
            <CardBody>
              <Text fontWeight='500' pb='5px' fontSize='12px'>
                Experienced Mentors
              </Text>
              <Text fontWeight='500' lineHeight='16px' fontSize='8px'>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </Text>
            </CardBody>
          </Card>
          <Card shadow='none' w={{base: '100%'}}>
            <CardHeader>
              <Image src={people} alt='grad' />
            </CardHeader>
            <CardBody>
              <Text fontWeight='500' pb='5px' fontSize='12px'>
                Affordable Prices
              </Text>
              <Text fontWeight='500' lineHeight='16px' fontSize='8px'>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </Text>
            </CardBody>
          </Card>
          <Card shadow='none' w={{base: '100%'}}>
            <CardHeader>
              <Image src={dollar} alt='grad' />
            </CardHeader>
            <CardBody>
              <Text fontWeight='500' pb='5px' fontSize='12px'>
                Affordable Prices
              </Text>
              <Text fontWeight='500' lineHeight='16px' fontSize='8px'>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </Text>
            </CardBody>
          </Card>
          <Card shadow='none' w={{base: '100%'}}>
            <CardHeader>
              <Image src={time} alt='grad' />
            </CardHeader>
            <CardBody>
              <Text fontWeight='500' pb='5px' fontSize='12px'>
                Flexible Learning
              </Text>
              <Text fontWeight='500' lineHeight='16px' fontSize='8px'>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Course;
