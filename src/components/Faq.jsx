import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import { PlusIcon } from '@radix-ui/react-icons';

const Faq = () => {
  return (
    <Box as="section" bg="#F8F9FC" pb="83px">
      <Box mt={{ base: '40px' }} w={{ base: '93%', lg: '65%' }} mx="auto">
        <Heading fontSize={{base: '24px', lg: '56px'}} lineHeight={{base: '29.5px', lg: '68.9px'}} textAlign="center">Frequently Asked Questions</Heading>
        <Text
          mx="auto"
          textAlign="center"
          fontFamily="Satoshi"
          fontWeight="500"
          fontSize={{ base: '8px', lg: '16px' }}
          color="#A1A1A1"
          lineHeight={{ base: '16px', lg: '28px' }}
          w={{ base: '290.5px', lg: '75%' }}
        >
          High-Definition Video is Video Of Higher Resolution And Quality Than
          Standard Definition. While There's No Standard Meaning For High
          Definition, Generally Any Standard Video Image
        </Text>
        <Accordion defaultIndex={[1]} allowMultiple>
          <AccordionItem
            pt={{ base: '24px', lg: '32px' }}
            borderTop="none"
            borderBottomColor="#EAEAEA"
            borderBottom={{ base: '12.6px', lg: '32px' }}
          >
            <AccordionButton
              fontWeight="900"
              color="#004DB3"
              fontFamily="Satoshi"
              fontSize={{ base: '14px', lg: '24px' }}
              lineHeight={{ base: '19px', lg: '32.4px' }}
            >
              <Box as="span" flex="1" textAlign="left">
                Is there a free trial available?
              </Box>
              <AccordionIcon as={PlusIcon} />
            </AccordionButton>
            <AccordionPanel
              pb={4}
              color={{ base: '#A1A1A1', lg: '#A2AA2A2' }}
              fontFamily="Satoshi"
              fontWeight="500"
              fontSize={{ base: '8px', lg: '16px' }}
              lineHeight={{ base: '16px', lg: '26px' }}
            >
              High-Definition Video is Video Of Higher Resolution And Quality
              Than Standard Definition. build Your Future With Our Quality
              Education. The Best And Largest All-In-One Online Tutoring
              Platform In The World definition.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[1]} allowMultiple>
          <AccordionItem
            pt={{ base: '24px', lg: '32px' }}
            borderTop="none"
            borderBottomColor="#EAEAEA"
            borderBottom={{ base: '12.6px', lg: '32px' }}
          >
            <AccordionButton
              fontWeight="900"
              color="#000F24"
              fontFamily="Satoshi"
              fontSize={{ base: '14px', lg: '24px' }}
              lineHeight={{ base: '19px', lg: '32.4px' }}
            >
              <Box as="span" flex="1" textAlign="left">
                Can I change my plan later?
              </Box>
              <AccordionIcon as={PlusIcon} />
            </AccordionButton>
            <AccordionPanel
              pb={4}
              color={{ base: '#A1A1A1', lg: '#A2AA2A2' }}
              fontFamily="Satoshi"
              fontWeight="500"
              fontSize={{ base: '8px', lg: '16px' }}
              lineHeight={{ base: '16px', lg: '26px' }}
            >
              High-Definition Video is Video Of Higher Resolution And Quality
              Than Standard Definition. build Your Future With Our Quality
              Education. The Best And Largest All-In-One Online Tutoring
              Platform In The World definition.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[1]} allowMultiple>
          <AccordionItem
            pt={{ base: '24px', lg: '32px' }}
            borderTop="none"
            borderBottomColor="#EAEAEA"
            borderBottom={{ base: '12.6px', lg: '32px' }}
          >
            <AccordionButton
              fontWeight="900"
              color="#000F24"
              fontFamily="Satoshi"
              fontSize={{ base: '14px', lg: '24px' }}
              lineHeight={{ base: '19px', lg: '32.4px' }}
            >
              <Box as="span" flex="1" textAlign="left">
                Are the courses lifetime?
              </Box>
              <AccordionIcon as={PlusIcon} />
            </AccordionButton>
            <AccordionPanel
              pb={4}
              color={{ base: '#A1A1A1', lg: '#A2AA2A2' }}
              fontFamily="Satoshi"
              fontWeight="500"
              fontSize={{ base: '8px', lg: '16px' }}
              lineHeight={{ base: '16px', lg: '26px' }}
            >
              High-Definition Video is Video Of Higher Resolution And Quality
              Than Standard Definition. build Your Future With Our Quality
              Education. The Best And Largest All-In-One Online Tutoring
              Platform In The World definition.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[1]} allowMultiple>
          <AccordionItem
            pt={{ base: '24px', lg: '32px' }}
            borderTop="none"
            borderBottomColor="#EAEAEA"
            borderBottom={{ base: '12.6px', lg: '32px' }}
          >
            <AccordionButton
              fontWeight="900"
              color="#000F24"
              fontFamily="Satoshi"
              fontSize={{ base: '14px', lg: '24px' }}
              lineHeight={{ base: '19px', lg: '32.4px' }}
            >
              <Box as="span" flex="1" textAlign="left">
                Do I get Certified after taking the courses?
              </Box>
              <AccordionIcon as={PlusIcon} />
            </AccordionButton>
            <AccordionPanel
              pb={4}
              color={{ base: '#A1A1A1', lg: '#A2AA2A2' }}
              fontFamily="Satoshi"
              fontWeight="500"
              fontSize={{ base: '8px', lg: '16px' }}
              lineHeight={{ base: '16px', lg: '26px' }}
            >
              High-Definition Video is Video Of Higher Resolution And Quality
              Than Standard Definition. build Your Future With Our Quality
              Education. The Best And Largest All-In-One Online Tutoring
              Platform In The World definition.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[1]} allowMultiple>
          <AccordionItem
            pt={{ base: '24px', lg: '32px' }}
            borderTop="none"
            borderBottomColor="#EAEAEA"
            borderBottom={{ base: '12.6px', lg: '32px' }}
          >
            <AccordionButton
              fontWeight="900"
              color="#000F24"
              fontFamily="Satoshi"
              fontSize={{ base: '14px', lg: '24px' }}
              lineHeight={{ base: '19px', lg: '32.4px' }}
            >
              <Box as="span" flex="1" textAlign="left">
                How do I reach out to mentors?
              </Box>
              <AccordionIcon as={PlusIcon} />
            </AccordionButton>
            <AccordionPanel
              pb={4}
              color={{ base: '#A1A1A1', lg: '#A2AA2A2' }}
              fontFamily="Satoshi"
              fontWeight="500"
              fontSize={{ base: '8px', lg: '16px' }}
              lineHeight={{ base: '16px', lg: '26px' }}
            >
              High-Definition Video is Video Of Higher Resolution And Quality
              Than Standard Definition. build Your Future With Our Quality
              Education. The Best And Largest All-In-One Online Tutoring
              Platform In The World definition.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[1]} allowMultiple>
          <AccordionItem
            pt={{ base: '24px', lg: '32px' }}
            borderTop="none"
            borderBottomColor="#EAEAEA"
            borderBottom={{ base: '12.6px', lg: '32px' }}
          >
            <AccordionButton
              fontWeight="900"
              color="#000F24"
              fontFamily="Satoshi"
              fontSize={{ base: '14px', lg: '24px' }}
              lineHeight={{ base: '19px', lg: '32.4px' }}
            >
              <Box as="span" flex="1" textAlign="left">
                Do we get job ready after taking the courses?
              </Box>
              <AccordionIcon as={PlusIcon} />
            </AccordionButton>
            <AccordionPanel
              pb={4}
              color={{ base: '#A1A1A1', lg: '#A2AA2A2' }}
              fontFamily="Satoshi"
              fontWeight="500"
              fontSize={{ base: '8px', lg: '16px' }}
              lineHeight={{ base: '16px', lg: '26px' }}
            >
              High-Definition Video is Video Of Higher Resolution And Quality
              Than Standard Definition. build Your Future With Our Quality
              Education. The Best And Largest All-In-One Online Tutoring
              Platform In The World definition.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
