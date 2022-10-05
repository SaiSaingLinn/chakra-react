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
    }}
    >
      <Box
        sx={{
          width: "300px",
          paddingBottom: "40px",
          color: "rgb(255, 255, 255)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          boxShadow: "none",
          backgroundColor: "rgb(28, 35, 47)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flex: "1 0 auto",
          zIndex: 1200,
          position: "fixed",
          top: 0,
          outline: 0,
          left: 0,
          borderRight: "1px solid rgb(231, 235, 240)",
        }}
      >
        <h3>KBZ</h3>
      </Box>
    </Box>
  );
}
