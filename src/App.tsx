import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, CircularProgress, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from './components/sidebar'

function App() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      as="div"
      sx={{
        display: "flex"
      }}
    >
      <Sidebar />
      <Box as="div" className="content">
        <Box
          as="div"
          sx={{
            padding: "10px 5px",
          }}
        >
          <Box as="div" mb={3}>
            <Text fontSize='2xl' as="b">KBZ's Chakra Utility Components</Text>
          </Box>
          <Box as="div" mb={3}>
            <Text fontSize='1xl' as="b">Button</Text>
          </Box>
          <Stack direction='row' spacing={4} align='center' mb={5}>
            <Button colorScheme='teal' variant='solid'>
              Button
            </Button>
            <Button colorScheme='teal' variant='outline'>
              Button
            </Button>
            <Button colorScheme='teal' variant='ghost'>
              Button
            </Button>
            <Button colorScheme='teal' variant='link'>
              Button
            </Button>
          </Stack>
          <Box as="div" mb={3}>
            <Text fontSize='1xl' as="b">Custom Class</Text>
          </Box>
          <Box className="custom-class">
            <h1>I'm custom class</h1>
          </Box>
          <Box as="div" mb={3}>
            <Text fontSize='1xl' as="b">Accordion</Text>
          </Box>
          <Box mb={3}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box as="div" mb={3}>
            <CircularProgress isIndeterminate color='green.300' />
          </Box>
          <Box as="div" mb={3}>
            <Text fontSize='1xl' as="b">Toast</Text>
          </Box>
          <Box mb={3}>
            <Button
              onClick={() =>
                toast({
                  title: 'Account created.',
                  description: "We've created your account for you.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              Show Toast
            </Button>
          </Box>
          <Box as="div" mb={3}>
            <Text fontSize='1xl' as="b">Modal</Text>
          </Box>
          <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Modal Paragraph</p>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        </Box>
      </Box>
    </Box>
  )
}

export default App
