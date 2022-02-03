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
  import { useTheme } from "next-themes";
  
  const DiabloAccordion = ({question, answer}) => {
    const { theme, setTheme } = useTheme();
    const [show, setShow] = useState(false);
    return (
      <>
        {theme === "light" ? (
        <Accordion allowMultiple className="drop-shadow-xl">
        <AccordionItem m={2} color='#FFF' backgroundColor='#F97316' w="container.sm">
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left' className="font-medium">
                {question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='#374151' backgroundColor='#FFF'>
            {answer}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      ):(
        <Accordion allowMultiple className="drop-shadow-xl">
        <AccordionItem m={2} color='orange' backgroundColor='#1F2937' w="container.sm">
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left' className="font-medium">
                {question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='white'>
            {answer}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      )}
    </>
    )
};

export default DiabloAccordion;
