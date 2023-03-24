import { Box, Image } from '@chakra-ui/react';
import arrow from '../assets/arrow.svg';
import bulb from '../assets/bulb.svg';
import hero from '../assets/hero.svg';
import vsc from '../assets/vsc.svg';
import wordpress from '../assets/wordpress.svg';
import figma from '../assets/figma.svg';

const Hero = () => {
  return (
    <Box
      mt={{ base: '47.2px', md: '0' }}
      mr={{ base: '0', md: '6.9%' }}
      position='relative'
      w={{ base: '400px', md: '35%' }}
    >
      <Image src={bulb} position='absolute' top='10px' left='0px' />
      <Image
        src={arrow}
        position='absolute'
        top={{ base: '-100px', md: '250px' }}
        right={{ base: '15px' }}
        left={{ md: '-50px' }}
        transform={{md: 'rotate(-60deg)'}}
      />
      <Image src={wordpress} position='absolute' bottom='35px' right='0px' />
      <Image src={figma} position='absolute' top='259px' left='18px' />
      <Image src={vsc} position='absolute' right='20px' top='40px' />
      <Image src={hero} ml='auto' alt='hero' />;
    </Box>
  );
};

export default Hero;
