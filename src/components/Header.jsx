import { Icon, Button, Flex, Text, Heading } from '@chakra-ui/react';
import { TextAlignJustifyIcon } from '@radix-ui/react-icons';

const Header = () => {
  return (
    <Flex as="header" w="full" h="150" bg="#004DB3" justifyContent="center">
      <Flex
        as="section"
        w={{ base: '93%', md: '85%' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading
          color="white"
          fontFamily="Midnight signature"
          fontWeight="900"
          fontSize="47px"
        >
          Tech Time
        </Heading>
        <Flex
          as="section"
          gap="24px"
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <Text fontSize={{ lg: '16px' }} color="white">
            Home
          </Text>
          <Text fontSize={{ lg: '16px' }} color="#AAC4E6">
            About Us
          </Text>
          <Text fontSize={{ lg: '16px' }} color="#AAC4E6">
            Courses
          </Text>
          <Text fontSize={{ lg: '16px' }} color="#AAC4E6">
            Testimonial
          </Text>
          <Text fontSize={{ lg: '16px' }} color="#AAC4E6">
            Community
          </Text>
          <Button bg="white" border="none" borderRadius="none" color="#004DB3">
            Enrol Now
          </Button>
        </Flex>
        <Icon
          w="24px"
          h="24px"
          display={{ md: 'none' }}
          color="white"
          as={TextAlignJustifyIcon}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
