import {
  Box,
  Text,
  Heading,
  Flex,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
} from '@chakra-ui/react';
import samuelF from '../assets/samuelF.svg';
import bryce from '../assets/bryce.svg';
import bella from '../assets/bella.svg';
import pagination from '../assets/pagination.svg';

const Testimony = () => {
  return (
    <Box bg="#F8F9FC" pb='40px'>
      <Box pt={{ base: '70px', md: '135' }} m="auto">
        <Heading textAlign="center">What Our Clients Are Saying</Heading>
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
      <Box
        as="section"
        w="full"
        overflow="hidden"
      >
        <Flex
          mt={{ base: '56px', md: '48px' }}
          gap={{ base: '16px', lg: '24px' }}
          position="relative" h={{base: '180px', lg: '250px'}}
        >
          <Card
            position="absolute"
            top={{ base: '-40px', lg: '-10px' }}
            left={{ base: '-100px', lg: '-200px' }}
            shadow="none"
          >
            <CardBody
              bg="#FFF"
              pb="0"
              w={{ base: '300px', lg: '555px' }}
              h={{ base: '122px', lg: '156px' }}
            >
              <Text
                lineHeight={{ base: '14px', lg: '186%' }}
                color="#A1A1A1"
                fontWeight="500"
                textTransform="capitalize"
                fontFamily="Satoshi"
                fontSize={{ base: '10px', md: '14px' }}
              >
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd
              </Text>
            </CardBody>
            <CardFooter>
              <HStack gap={2}>
                <Image w="24px" h="24px" src={bella} alt="bella" />
                <Box>
                  <Text
                    lineHeight="14px"
                    fontFamily="Satoshi"
                    fontWeight="700"
                    fontSize={{ base: '10px', lg: '14px' }}
                  >
                    Bella Moon
                  </Text>
                  <Text
                    color="#A1A1A1"
                    lineHeight="14px"
                    fontFamily="Satoshi"
                    fontWeight="700"
                    fontSize={{ base: '10px', lg: '14px' }}
                  >
                    Product Designer
                  </Text>
                </Box>
              </HStack>
            </CardFooter>
          </Card>
          <Card
            position="absolute"
            top={{ base: '-40px', lg: '-10px' }}
            left={{ base: '230px', lg: '400px' }}
            shadow="none"
            // mt={{ base: '56px', md: '48px' }}
          >
            <CardBody
              bg="#FFF"
              pb="0"
              w={{ base: '300px', lg: '555px' }}
              h={{ base: '122px', lg: '156px' }}
            >
              <Text
                lineHeight={{ base: '14px', lg: '186%' }}
                color="#A1A1A1"
                fontWeight="500"
                textTransform="capitalize"
                fontFamily="Satoshi"
                fontSize={{ base: '10px', md: '14px' }}
              >
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd
              </Text>
            </CardBody>
            <CardFooter>
              <HStack gap={2}>
                <Image w="24px" h="24px" src={samuelF} alt="samuel" />
                <Box>
                  <Text
                    lineHeight="14px"
                    fontFamily="Satoshi"
                    fontWeight="700"
                    fontSize={{ base: '10px', lg: '14px' }}
                  >
                    Samuel Fortune
                  </Text>
                  <Text
                    color="#A1A1A1"
                    lineHeight="14px"
                    fontFamily="Satoshi"
                    fontWeight="700"
                    fontSize={{ base: '10px', lg: '14px' }}
                  >
                    Product Designer
                  </Text>
                </Box>
              </HStack>
            </CardFooter>
          </Card>
          <Card
            position="absolute"
            top={{ base: '-40px', lg: '-10px' }}
            left={{ base: '560px', lg: '1000px' }}
            shadow="none"
            // mt={{ base: '56px', md: '48px' }}
          >
            <CardBody
              bg="#FFF"
              pb="0"
              w={{ base: '300px', lg: '555px' }}
              h={{ base: '122px', lg: '156px' }}
            >
              <Text
                lineHeight={{ base: '14px', lg: '186%' }}
                color="#A1A1A1"
                fontWeight="500"
                textTransform="capitalize"
                fontFamily="Satoshi"
                fontSize={{ base: '10px', md: '14px' }}
              >
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd
              </Text>
            </CardBody>
            <CardFooter>
              <HStack gap={2}>
                <Image w="24px" h="24px" src={bryce} alt="bryce" />
                <Box>
                  <Text
                    lineHeight="14px"
                    fontFamily="Satoshi"
                    fontWeight="700"
                    fontSize={{ base: '10px', lg: '14px' }}
                  >
                    Bryce Jason
                  </Text>
                  <Text
                    color="#A1A1A1"
                    lineHeight="14px"
                    fontFamily="Satoshi"
                    fontWeight="700"
                    fontSize={{ base: '10px', lg: '14px' }}
                  >
                    Product Designer
                  </Text>
                </Box>
              </HStack>
            </CardFooter>
          </Card>
          <Card
            position="absolute"
            top={{ base: '-40px', lg: '-10px' }}
            left={{ base: '890px', lg: '1600px' }}
            shadow="none"
            // mt={{ base: '56px', md: '48px' }}
          >
            <CardBody
              bg="#FFF"
              pb="0"
              w={{ base: '300px', lg: '555px' }}
              h={{ base: '122px', lg: '156px' }}
            >
              <Text
                lineHeight={{ base: '14px', lg: '186%' }}
                color="#A1A1A1"
                fontWeight="500"
                textTransform="capitalize"
                fontFamily="Satoshi"
                fontSize={{ base: '10px', md: '14px' }}
              >
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd
              </Text>
            </CardBody>
            <CardFooter>
              <HStack gap={2}>
                <Image w="24px" h="24px" src={bella} alt="bella" />
                <Box>
                  <Text
                    lineHeight="14px"
                    fontFamily="Satoshi"
                    fontWeight="700"
                    fontSize={{ base: '10px', lg: '14px' }}
                  >
                    Bella Moon
                  </Text>
                  <Text
                    color="#A1A1A1"
                    lineHeight="14px"
                    fontFamily="Satoshi"
                    fontWeight="700"
                    fontSize={{ base: '10px', lg: '14px' }}
                  >
                    Product Designer
                  </Text>
                </Box>
              </HStack>
            </CardFooter>
          </Card>
        </Flex>
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
