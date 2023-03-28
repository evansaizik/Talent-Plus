import {
  Flex,
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Text,
  Image,
  keyframes,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import clients from '../utils/clients';
import classes from './Animation.module.css';

const animationKeyFrames = keyframes`
0% {transform: translateX(0%);}
100% {transform: translateX(-101%);}`;
const sliders = `${animationKeyFrames} 11s infinite  ease-in-out `;

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === clients.length) return setIndex(0);

    const timeout = setTimeout(() => {
      setIndex((prevValue) => prevValue + 1);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <Box w="100%" mx="auto" overflow="scroll">
      <Box
        mx="auto"
        sx={{
          '::-webkit-scrollbar': {
            color: 'transparent',
          },
        }}
        w={{ base: '332px', lg: '603px' }}
        mt={{ base: '56px', md: '48px' }}
        mb={{ base: '24px', md: '30px' }}
        position="relative"
        h={{ base: '180px', lg: '250px' }}
        minW="fit-content"
      >
        {clients.map((client, i) => {
          return (
            <Card
              left={{ base: `${index * -100}%`, lg: `${index * -100}%` }}
              key={client.id}
              className={classes.sliding}
              position="absolute"
              transform={`translateX(${i * 105}%)`}
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
                  {client.caption}
                </Text>
              </CardBody>
              <CardFooter>
                <HStack gap={2}>
                  <Image
                    w={{ base: '24px', lg: '48px' }}
                    h={{ base: '24px', lg: '48px' }}
                    src={client.image}
                    alt="client image"
                  />
                  <Box>
                    <Text
                      lineHeight="14px"
                      fontFamily="Satoshi"
                      fontWeight="700"
                      fontSize={{ base: '10px', lg: '14px' }}
                    >
                      {client.name}
                    </Text>
                    <Text
                      color="#A1A1A1"
                      lineHeight="14px"
                      fontFamily="Satoshi"
                      fontWeight="700"
                      fontSize={{ base: '10px', lg: '14px' }}
                    >
                      {client.profession}
                    </Text>
                  </Box>
                </HStack>
              </CardFooter>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Slider;
