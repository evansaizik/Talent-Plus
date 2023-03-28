import {
  Heading,
  Box,
  Grid,
  HStack,
  Text,
  Button,
  GridItem,
  Card,
  Image,
  Flex,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';
import courses from '../utils/courses';
import splash from '../assets/splash.svg';

Text.defaultProps = {
  fontFamily: 'Clash Display',
};

const Browse = () => {
  return (
    <Grid
      w="100%"
      position="relative"
      templateColumns="repeat(1fr)"
      bg="#F8F9FC"
      justifyContent="center"
      alignItems="center"
    >
      <GridItem w={{ base: '93%' }} m="auto">
        <Heading
          textAlign="center"
          fontSize={{ base: '24px', md: '56px' }}
          textTransform="capitalize"
        >
          browse our popular courses
        </Heading>
        <Text
          mt="8px"
          mx="auto"
          w={{ base: '70%', lg: '600px' }}
          lineHeight="200%"
          color="#A1A1A1"
          textAlign="center"
          fontSize={{ base: '8px', md: '16px' }}
        >
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </Text>
      </GridItem>

      <HStack
        mt={{ base: '20px', md: '56px' }}
        justifyContent="center"
        gap={{ base: '10px', md: '40px' }}
      >
        <Button
          fontSize={{ base: '8px', md: '16px' }}
          color="#004DB3"
          bg="#FFF"
        >
          All Categories
        </Button>
        <Button
          fontSize={{ base: '8px', md: '16px' }}
          bg="#FFF"
          color="#A1A1A1"
        >
          Design
        </Button>
        <Button
          fontSize={{ base: '8px', md: '16px' }}
          bg="#FFF"
          color="#A1A1A1"
        >
          Development
        </Button>
        <Button
          fontSize={{ base: '8px', md: '16px' }}
          bg="#FFF"
          color="#A1A1A1"
        >
          Marketing
        </Button>
      </HStack>
      <Image src={splash} position="absolute" left="10%" top="9%" zIndex={1} />
      <Grid
        w={{ base: '93%' }}
        gap={{ base: 2, md: 4 }}
        m="auto"
        mt="30px"
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
      >
        {courses.map((course) => {
          return (
            <Card key={course.id}>
              <CardHeader pb={{ base: '3px', md: '15.3' }}>
                <Image
                  bg="rgba(30, 93, 206, 0.2)"
                  src={course.image}
                  alt="course image"
                />
              </CardHeader>
              <CardBody pt="0">
                <Flex justifyContent="space-between">
                  <Button
                    w={{ base: '29px', md: '79px' }}
                    fontWeight="700"
                    h={{ base: '9px', md: '24px' }}
                    fontSize={{ base: '4px', md: '8px' }}
                    color="#1E5DCE"
                    borderRadius="full"
                  >
                    {course.specialty}
                  </Button>
                  <Text color="#A1A1A1" fontSize={{ base: '4px', md: '12px' }}>
                    {course.ratingsAverage}{' '}
                    <Image
                      w={{ md: '13.3' }}
                      h={{ md: '12.7' }}
                      display={'inline'}
                      src={course.star}
                      alt="grade"
                    />
                    {course.ratings}
                  </Text>
                </Flex>
                <Box mt={{ base: '10px', md: '28px' }} w="90%">
                  <Text
                    fontSize={{ base: '8px', md: '24px' }}
                    fontWeight="700"
                    lineHeight={{ base: '10px', md: '29.52px' }}
                    color="#000F24"
                  >
                    {course.title}
                  </Text>
                </Box>
                <Flex
                  mt={{ base: '4px', md: '18px' }}
                  justifyContent="space-between"
                >
                  <Text
                    display="flex"
                    gap="4px"
                    alignItems="center"
                    color="#A1A1A1"
                    fontFamily="Satoshi"
                    fontSize={{ base: '4px', md: '16px' }}
                  >
                    <Image
                      w={{ md: '20px' }}
                      h={{ md: '20px' }}
                      display="inline"
                      src={course.timeIcon}
                      alt="schedule"
                    />{' '}
                    {course.time}
                  </Text>

                  <Text
                    display="flex"
                    gap="4px"
                    alignItems="center"
                    color="#A1A1A1"
                    fontSize={{ base: '4px', md: '16px' }}
                    fontFamily="Satoshi"
                  >
                    <Image
                      display="inline"
                      w={{ md: '22px' }}
                      h={{ md: '16px' }}
                      src={course.bookIcon}
                      alt="schedule"
                    />{' '}
                    {course.lesson}
                  </Text>
                </Flex>
                <Flex
                  pt="17.5px"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Flex gap={2} alignItems="center">
                    <Image
                      src={course.avatar}
                      w={{ md: '40px' }}
                      h={{ md: '40px' }}
                      alt="leonard"
                    />
                    <Text
                      fontSize={{ base: '6px', md: '16px' }}
                      fontFamily="Satoshi"
                      fontWeight="700"
                    >
                      {course.name}
                    </Text>
                  </Flex>
                  <Text
                    color="#004DB3"
                    fontWeight="700"
                    fontSize={{ base: '8px', md: '20px' }}
                  >
                    {course.price}
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          );
        })}
      </Grid>
      <GridItem pt="24px" m="auto">
        <Button
          bg="#004DB3"
          display={{ base: 'block', md: 'none' }}
          w="100px"
          h="27px"
          borderRadius="2px"
          color="white"
          fontSize={{ base: '8px' }}
        >
          View All Courses
        </Button>
        <Button
          bg="#004DB3"
          borderRadius="4px"
          display={{ base: 'none', md: 'block' }}
          w={{ md: '209px' }}
          h={{ md: '54px' }}
          color="white"
          fontSize={{ md: '16px' }}
        >
          Explore All Courses
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Browse;
