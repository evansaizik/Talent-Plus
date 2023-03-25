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
  CardFooter,
} from '@chakra-ui/react';
import conference from '../assets/conference.svg';
import audience from '../assets/audience.svg';
import discuss from '../assets/discuss.svg';
import screen from '../assets/screen.svg';
import table from '../assets/table.svg';
import laptop from '../assets/laptop.svg';
import grade from '../assets/grade.svg';
import schedule from '../assets/schedule.svg';
import book from '../assets/menu_book.svg';
import leonard from '../assets/leonard.svg';
import claretta from '../assets/claretta.svg';
import adam from '../assets/adam.svg';
import jeffery from '../assets/jeffery.svg';
import jessica from '../assets/jessica.svg';
import samuel from '../assets/samuel.svg';

Text.defaultProps = {
  fontFamily: 'Clash Display',
};

const Browse = () => {
  return (
    <Grid
      w="100%"
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
      <Grid
        w={{ base: '93%' }}
        gap={{ base: 2, md: 4 }}
        m="auto"
        mt="30px"
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
      >
        <Card>
          <CardHeader pb="3px">
            <Image
              bg="rgba(30, 93, 206, 0.2)"
              src={conference}
              alt="conference"
            />
          </CardHeader>
          <CardBody pt="0">
            <Flex justifyContent="space-between">
              <Button
                w={{ base: '29px', md: '' }}
                fontWeight="700"
                h={{ base: '9px' }}
                fontSize={{ base: '4px', md: '8px' }}
                color="#1E5DCE"
              >
                Design
              </Button>
              <Text color="#A1A1A1" fontSize={{ base: '4px' }}>
                {' '}
                4.7k <Image display={'inline'} src={grade} alt="grade" />{' '}
                (32.7k+)
              </Text>
            </Flex>
            <Box mt="10px" w="155px">
              <Text
                fontSize={{ base: '8px', md: '' }}
                fontWeight="700"
                lineHeight="10px"
                color="#000F24"
              >
                Introducton to user research in UX Design
              </Text>
            </Box>
            <Flex mt="4px" justifyContent="space-between">
              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={schedule} alt="schedule" /> 23hrs
                50mins
              </Text>

              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={book} alt="schedule" /> 15 Lessons
              </Text>
            </Flex>
            <Flex
              pt="17.5px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex gap={2} alignItems="center">
                <Image src={leonard} alt="leonard" />
                <Text fontSize="6px" fontFamily="Satoshi" fontWeight="700">
                  Leonard Victor
                </Text>
              </Flex>
              <Text color="#004DB3" fontWeight="700" fontSize="8px">
                $15.00
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card>
          <CardHeader pb="3px">
            <Image bg="rgba(30, 93, 206, 0.2)" src={audience} alt="audience" />
          </CardHeader>
          <CardBody pt="0">
            <Flex justifyContent="space-between">
              <Button
                w={{ base: '29px', md: '' }}
                fontWeight="700"
                h={{ base: '9px' }}
                fontSize={{ base: '4px', md: '8px' }}
                color="#1E5DCE"
              >
                Marketing
              </Button>
              <Text color="#A1A1A1" fontSize={{ base: '4px' }}>
                {' '}
                4.7k <Image display={'inline'} src={grade} alt="grade" />{' '}
                (32.7k+)
              </Text>
            </Flex>
            <Box mt="10px" w="155px">
              <Text
                fontSize={{ base: '8px', md: '' }}
                fontWeight="700"
                lineHeight="10px"
                color="#000F24"
              >
                Introducton to new marketing audience
              </Text>
            </Box>
            <Flex mt="4px" justifyContent="space-between">
              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={schedule} alt="schedule" /> 22hrs
                30mins
              </Text>

              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={book} alt="schedule" /> 22 Lessons
              </Text>
            </Flex>
            <Flex
              pt="17.5px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex gap={2} alignItems="center">
                <Image src={jeffery} alt="jeffery" />
                <Text fontSize="6px" fontFamily="Satoshi" fontWeight="700">
                  Jeffery Williams
                </Text>
              </Flex>
              <Text color="#004DB3" fontWeight="700" fontSize="8px">
                $32.00
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card>
          <CardHeader pb="3px">
            <Image bg="rgba(30, 93, 206, 0.2)" src={discuss} alt="discuss" />
          </CardHeader>
          <CardBody pt="0">
            <Flex justifyContent="space-between">
              <Button
                w={{ base: '29px', md: '' }}
                fontWeight="700"
                h={{ base: '9px' }}
                fontSize={{ base: '4px', md: '8px' }}
                color="#1E5DCE"
              >
                Development
              </Button>
              <Text color="#A1A1A1" fontSize={{ base: '4px' }}>
                {' '}
                4.7k <Image display={'inline'} src={grade} alt="grade" />{' '}
                (32.7k+)
              </Text>
            </Flex>
            <Box mt="10px" w="155px">
              <Text
                fontSize={{ base: '8px', md: '' }}
                fontWeight="700"
                lineHeight="10px"
                color="#000F24"
              >
                Introducton to HTML, CSS and bootstrap
              </Text>
            </Box>
            <Flex mt="4px" justifyContent="space-between">
              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={schedule} alt="schedule" /> 45hrs
                50mins
              </Text>

              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={book} alt="schedule" /> 55 Lessons
              </Text>
            </Flex>
            <Flex
              pt="17.5px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex gap={2} alignItems="center">
                <Image src={claretta} alt="leonard" />
                <Text fontSize="6px" fontFamily="Satoshi" fontWeight="700">
                  Claretta Mason
                </Text>
              </Flex>
              <Text color="#004DB3" fontWeight="700" fontSize="8px">
                $55.00
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card>
          <CardHeader pb="3px">
            <Image bg="rgba(30, 93, 206, 0.2)" src={screen} alt="screen" />
          </CardHeader>
          <CardBody pt="0">
            <Flex justifyContent="space-between">
              <Button
                w={{ base: '29px', md: '' }}
                fontWeight="700"
                h={{ base: '9px' }}
                fontSize={{ base: '4px', md: '8px' }}
                color="#1E5DCE"
              >
                Development
              </Button>
              <Text color="#A1A1A1" fontSize={{ base: '4px' }}>
                {' '}
                4.7k <Image display={'inline'} src={grade} alt="grade" />{' '}
                (32.7k+)
              </Text>
            </Flex>
            <Box mt="10px" w="155px">
              <Text
                fontSize={{ base: '8px', md: '' }}
                fontWeight="700"
                lineHeight="10px"
                color="#000F24"
              >
                Introducton to Javascript, Git and Github
              </Text>
            </Box>
            <Flex mt="4px" justifyContent="space-between">
              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={schedule} alt="schedule" /> 30hrs
                50mins
              </Text>

              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={book} alt="schedule" /> 22 Lessons
              </Text>
            </Flex>
            <Flex
              pt="17.5px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex gap={2} alignItems="center">
                <Image src={jessica} alt="leonard" />
                <Text fontSize="6px" fontFamily="Satoshi" fontWeight="700">
                  Jessica Duke
                </Text>
              </Flex>
              <Text color="#004DB3" fontWeight="700" fontSize="8px">
                $45.00
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card>
          <CardHeader pb="3px">
            <Image bg="rgba(30, 93, 206, 0.2)" src={table} alt="table" />
          </CardHeader>
          <CardBody pt="0">
            <Flex justifyContent="space-between">
              <Button
                w={{ base: '29px', md: '' }}
                fontWeight="700"
                h={{ base: '9px' }}
                fontSize={{ base: '4px', md: '8px' }}
                color="#1E5DCE"
              >
                Marketing
              </Button>
              <Text color="#A1A1A1" fontSize={{ base: '4px' }}>
                {' '}
                4.7k <Image display={'inline'} src={grade} alt="grade" />{' '}
                (32.7k+)
              </Text>
            </Flex>
            <Box mt="10px" w="155px">
              <Text
                fontSize={{ base: '8px', md: '' }}
                fontWeight="700"
                lineHeight="10px"
                color="#000F24"
              >
                Introducton to outroom marketing analysis
              </Text>
            </Box>
            <Flex mt="4px" justifyContent="space-between">
              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={schedule} alt="schedule" /> 33hrs
                50mins
              </Text>

              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={book} alt="schedule" /> 26 Lessons
              </Text>
            </Flex>
            <Flex
              pt="17.5px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex gap={2} alignItems="center">
                <Image src={samuel} alt="samuel" />
                <Text fontSize="6px" fontFamily="Satoshi" fontWeight="700">
                  Samuel Jacob
                </Text>
              </Flex>
              <Text color="#004DB3" fontWeight="700" fontSize="8px">
                $25.00
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card>
          <CardHeader pb="3px">
            <Image bg="rgba(30, 93, 206, 0.2)" src={laptop} alt="laptop" />
          </CardHeader>
          <CardBody pt="0">
            <Flex justifyContent="space-between">
              <Button
                w={{ base: '29px', md: '' }}
                fontWeight="700"
                h={{ base: '9px' }}
                fontSize={{ base: '4px', md: '8px' }}
                color="#1E5DCE"
              >
                Design
              </Button>
              <Text color="#A1A1A1" fontSize={{ base: '4px' }}>
                {' '}
                4.7k <Image display={'inline'} src={grade} alt="grade" />{' '}
                (32.7k+)
              </Text>
            </Flex>
            <Box mt="10px" w="155px">
              <Text
                fontSize={{ base: '8px', md: '' }}
                fontWeight="700"
                lineHeight="10px"
                color="#000F24"
              >
                Introducton to live marketing analysis
              </Text>
            </Box>
            <Flex mt="4px" justifyContent="space-between">
              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={schedule} alt="schedule" /> 10hrs
                50mins
              </Text>

              <Text
                display="flex"
                gap="4px"
                alignItems="center"
                color="#A1A1A1"
                fontSize={{ base: '4px' }}
              >
                <Image display="inline" src={book} alt="schedule" /> 32 Lessons
              </Text>
            </Flex>
            <Flex
              pt="17.5px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex gap={2} alignItems="center">
                <Image src={adam} alt="adam" />
                <Text fontSize="6px" fontFamily="Satoshi" fontWeight="700">
                  Adam Smith
                </Text>
              </Flex>
              <Text color="#004DB3" fontWeight="700" fontSize="8px">
                $25.00
              </Text>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Browse;
