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
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import faqs from '../utils/faq';

const Faq = () => {
  return (
    <Box as="section" bg="#F8F9FC" pb="83px">
      <Box mt={{ base: '40px' }} w={{ base: '93%', lg: '65%' }} mx="auto">
        <Heading
          fontSize={{ base: '24px', lg: '56px' }}
          lineHeight={{ base: '29.5px', lg: '68.9px' }}
          textAlign="center"
        >
          Frequently Asked Questions
        </Heading>
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
        <Accordion allowToggle defaultIndex={[null]}>
          {faqs.map((faq) => {
            return (
              <AccordionItem
                key={faq.id}
                pt={{ base: '24px', lg: '32px' }}
                borderTop="none"
                borderBottomColor="#EAEAEA"
                borderBottom={{ base: '12.6px', lg: '32px' }}
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      fontWeight="700"
                      color={isExpanded ? '#004DB3' : '#000F24'}
                      fontFamily="Satoshi"
                      fontSize={{ base: '14px', lg: '24px' }}
                      lineHeight={{ base: '19px', lg: '32.4px' }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        {faq.question}
                      </Box>
                      <AccordionIcon as={isExpanded ? MinusIcon : PlusIcon} />
                    </AccordionButton>
                    <AccordionPanel
                      pb={4}
                      color={{ base: '#A1A1A1', lg: '#A2AA2A2' }}
                      fontFamily="Satoshi"
                      fontWeight="500"
                      fontSize={{ base: '8px', lg: '16px' }}
                      lineHeight={{ base: '16px', lg: '26px' }}
                    >
                      {faq.answer}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
