import * as React from 'react';
import { Box } from '@chakra-ui/react';

export interface IAppProps {
}

export function Sidebar (props: IAppProps) {
  return (
    <Box
    as="div"
    bg="brand.100"
    sx={{
        flexShrink: 0,
        width: 300,
        display: "block",
        color: "#FFF",
        padding: "5px 10px",
        height: "100vh",
    }}
    >
    <h3>KBZ</h3>
    </Box>
  );
}
