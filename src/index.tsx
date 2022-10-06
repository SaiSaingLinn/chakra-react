import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import App from "./App"
import theme from "./theme"
import { Provider } from "react-redux"
import Store from "./store"

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)

