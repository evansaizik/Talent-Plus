import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import map from '../assets/map.svg';
import one from '../assets/one.svg';
import two from '../assets/two.svg';
import three from '../assets/three.svg';
import four from '../assets/four.svg';
import five from '../assets/five.svg';
import six from '../assets/six.svg';
import seven from '../assets/seven.svg';
import eight from '../assets/eight.svg';
import nine from '../assets/nine.svg';
import ten from '../assets/ten.svg';

const Connect = () => {
  return (
    <Box as="section" w="full" pt={{ base: '40px', lg: '86px' }} bg="#004DB3">
      <Box w="93%" m="auto">
        <Text
          textAlign="center"
          color="#FFF"
          fontFamily="Satoshi"
          fontSize={{ base: '8px', lg: '16px' }}
        >
          JOIN OUR COMMUNITY
        </Text>
        <Heading
          textAlign="center"
          fontFamily="Clash Display"
          fontWeight="700"
          color="#FFF"
          lineHeight={{ base: '30px', lg: '69px' }}
          fontSize={{ base: '24px', lg: '56px' }}
        >
          Are you ready to connect with the future talent of the tech world
        </Heading>
        <Text
          textAlign="center"
          pt={{ base: '4px', lg: '16px' }}
          color="#FFF"
          fontFamily="Satoshi"
          fontSize={{ base: '8px', lg: '16px' }}
        >
          Meet Up With Other Techstars And Grow Together
        </Text>
      </Box>
      <Box
        position={'relative'}
        m="auto"
        w={{ base: '90%', md: '600px', lg: '983px' }}
        h={{ base: '207px', md: '250px', lg: '520px' }}
      >
        <Image
          w="100%"
          pt={{ base: '24px', lg: '32px' }}
          src={map}
          alt="mask"
          position={'relative'}
        />
        <Image
          w={{ base: '25.5px', lg: '64px' }}
          h={{ base: '25.5px', lg: '64px' }}
          src={one}
          alt="one"
          position="absolute"
          top="18%"
          left="9%"
        />
        <Image
          w={{ base: '25.5px', lg: '64px' }}
          h={{ base: '25.5px', lg: '64px' }}
          src={two}
          alt="two"
          position="absolute"
          top="46%"
          left="25%"
        />
        <Image
          w={{ base: '25.5px', lg: '64px' }}
          h={{ base: '25.5px', lg: '64px' }}
          src={three}
          alt="three"
          position="absolute"
          top="80%"
          left="25%"
        />
        <Image
          w={{ base: '25.5px', lg: '64px' }}
          h={{ base: '25.5px', lg: '64px' }}
          src={four}
          alt="four"
          position="absolute"
          top="24%"
          left="39%"
        />
        <Image
          w={{ base: '25.5px', lg: '64px' }}
          h={{ base: '25.5px', lg: '64px' }}
          src={five}
          alt="five"
          position="absolute"
          top="67%"
          left="51%"
        />
        <Image
          w={{ base: '25.5px', lg: '64px' }}
          h={{ base: '25.5px', lg: '64px' }}
          src={six}
          alt="one"
          position="absolute"
          top="37%"
          left="57%"
        />
        <Image
          w={{ base: '25.5px', lg: '64px' }}
          h={{ base: '25.5px', lg: '64px' }}
          src={seven}
          alt="seven"
          position="absolute"
          top="36%"
          left="73%"
        />
        <Image
          w={{ base: '25.5px', lg: '64px' }}
          h={{ base: '25.5px', lg: '64px' }}
          src={eight}
          alt="eight"
          position="absolute"
          top="75%"
          left="81%"
        />
        <Image
          w={{ base: '25.5px', lg: '64px' }}
          h={{ base: '25.5px', lg: '64px' }}
          src={nine}
          alt="nine"
          position="absolute"
          top="16%"
          left="84%"
        />
        <Image
          w={{ base: '25.5px', lg: '64px' }}
          h={{ base: '25.5px', lg: '64px' }}
          src={ten}
          alt="ten"
          position="absolute"
          top="56%"
          left="88%"
        />
      </Box>
      <Box m="auto" pb="40px" w="300px" textAlign="center">
        <Button
          color="#004DB3"
          borderRadius={{ base: '2px', lg: '4px' }}
          fontSize={{ base: '8px', lg: '16px' }}
          w={{ base: '110px', lg: '220px' }}
          h={{ base: '27px', lg: '54px' }}
          m="auto"
        >
          Join Our Community
        </Button>
      </Box>
    </Box>
  );
};

export default Connect;
