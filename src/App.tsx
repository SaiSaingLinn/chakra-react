import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from './components/sidebar'

function App() {
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
          <Stack direction='row' spacing={4} align='center'>
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
        </Box>
      </Box>
    </Box>
  )
}

export default App
