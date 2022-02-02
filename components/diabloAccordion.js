import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
  import { MinusIcon, AddIcon } from '@chakra-ui/icons'
  import React, {useState} from 'react';
  
  const DiabloAccordion = ({question, answer}) => {
    const [show, setShow] = useState(false);
    return (
        <Accordion allowMultiple>
        <AccordionItem m={2} color='orange' backgroundColor='#1F2937' w="container.sm">
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                {question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='white'>
            {answer}
          </AccordionPanel>
        </AccordionItem>
      
        {/* <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    {question}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {answer}
              </AccordionPanel>
            </>
          )}
        </AccordionItem> */}
      </Accordion>
    )
};

export default DiabloAccordion;
