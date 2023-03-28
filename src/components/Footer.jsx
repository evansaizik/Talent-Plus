import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';
import discord from '../assets/discord.svg';

const Footer = () => {
  return (
    <Box bg="#000F24" w="full">
      <Grid
        w="86%"
        m={{ lg: 'auto' }}
        pl={{ base: '16px', lg: '0' }}
        templateColumns={{
          base: 'repeat(1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        pb={{ base: '164px', lg: '347px' }}
        gap={4}
      >
        <GridItem mt={{ base: '40px', lg: '166px' }}>
          <Heading
            fontFamily="Midnight Signature"
            fontWeight="900"
            lineHeight={{ base: '36.31px', lg: '47px' }}
            fontStyle="italic"
            color="#FFF"
          >
            Tech Time
          </Heading>
          <Text
            mt={{ base: '24px', lg: '26px' }}
            fontSize="16px"
            lineHeight={{ base: '22px', lg: '21.6px' }}
            fontWeight="400"
            color="#FFF"
            fontFamily="Satoshi"
            w="281px"
          >
            Reach out to us on any of our social media networks
          </Text>
          <HStack gap={4} mt="24px" mb="70px">
            <Image w="32px" h="32px" src={facebook} alt="facebook" />
            <Image w="32px" h="32px" src={twitter} alt="twitter" />
            <Image w="32px" h="32px" src={youtube} alt="youtube" />
            <Image w="32px" h="32px" src={instagram} alt="instagram" />
            <Image w="32px" h="32px" src={discord} alt="discord" />
          </HStack>
        </GridItem>
        <GridItem>
          <Heading
            mt={{ lg: '166px' }}
            fontFamily="Clash Display"
            fontWeight="600"
            fontSize={{ base: '24px', lg: '32px' }}
            lineHeight={{ base: '29.5px', lg: '39px' }}
            color="#FFF"
            mb="24px"
          >
            Useful Links
          </Heading>
          <UnorderedList ml="0" color="#FFF" listStyleType="none">
            <ListItem
              fontFamily="Satoshi"
              fontWeight="400"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight={{ base: '21.6px', lg: '32px' }}
              mb="16px"
            >
              Home
            </ListItem>
            <ListItem
              fontFamily="Satoshi"
              fontWeight="400"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight={{ base: '21.6px', lg: '32px' }}
              mb="16px"
            >
              About Us
            </ListItem>
            <ListItem
              fontFamily="Satoshi"
              fontWeight="400"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight={{ base: '21.6px', lg: '32px' }}
              mb="16px"
            >
              Our Courses
            </ListItem>
            <ListItem
              fontFamily="Satoshi"
              fontWeight="400"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight={{ base: '21.6px', lg: '32px' }}
              mb="16px"
            >
              Testimonials
            </ListItem>
            <ListItem
              fontFamily="Satoshi"
              fontWeight="400"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight={{ base: '21.6px', lg: '32px' }}
              mb="16px"
            >
              Our Community
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem>
          <Heading
            mt={{ lg: '166px' }}
            fontFamily="Clash Display"
            fontWeight="600"
            fontSize={{ base: '24px', lg: '32px' }}
            lineHeight={{ base: '29.5px', lg: '39px' }}
            color="#FFF"
            mb={{ base: '24px', lg: '32px' }}
          >
            Community
          </Heading>
          <UnorderedList ml="0" color="#FFF" listStyleType="none">
            <ListItem
              fontFamily="Satoshi"
              fontWeight="400"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight={{ base: '21.6px', lg: '32px' }}
              mb="16px"
            >
              Help Centers
            </ListItem>
            <ListItem
              fontFamily="Satoshi"
              fontWeight="400"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight={{ base: '21.6px', lg: '32px' }}
              mb="16px"
            >
              Connections
            </ListItem>
            <ListItem
              fontFamily="Satoshi"
              fontWeight="400"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight={{ base: '21.6px', lg: '32px' }}
              mb="16px"
            >
              Suggestion
            </ListItem>
            <ListItem
              fontFamily="Satoshi"
              fontWeight="400"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight={{ base: '21.6px', lg: '32px' }}
              mb="16px"
            >
              Blog
            </ListItem>
            <ListItem
              fontFamily="Satoshi"
              fontWeight="400"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight={{ base: '21.6px', lg: '32px' }}
              mb="16px"
            >
              Newsletter
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem>
          <Heading
            mt={{ lg: '166px' }}
            fontFamily="Clash Display"
            fontWeight="600"
            fontSize={{ base: '24px', lg: '32px' }}
            lineHeight={{ base: '21.6px', lg: '39px' }}
            color="#FFF"
            mb={{ base: '24px', lg: '32px' }}
          >
            Subscribe Us
          </Heading>
          <Flex w={{ base: '95%' }}>
            <Input color="#FFF" borderColor="#054FB3" borderRadius="0" />
            <Button
              fontWeight="500"
              fontSize="14px"
              fontFamily="Satoshi"
              color="#FFF"
              bg="#054FB3"
              borderRadius="none"
            >
              Send Message
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
